const express = require("express");
const fs = require("fs/promises");
const bcrypt = require("bcrypt");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Server is running...");
});
app.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required."
            });
        }
        const fileData = await fs.readFile("./data/user.json", "utf-8");
        const userList = JSON.parse(fileData);
        const existingUser = userList.find(user => user.email === email);

        if (existingUser) {
            return res.status(409).json({
                message: "Email already exists."
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: userList.length + 1,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: "student"
        };
        userList.push(newUser);

        await fs.writeFile(
            "./data/user.json",
            JSON.stringify(userList, null, 2)
        );
        const { password: _, ...userData } = newUser;

        return res.status(201).json({
            message: "User created successfully.",
            data: userData
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});