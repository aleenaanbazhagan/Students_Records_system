const oracledb = require("oracledb");

const dbConfig = {
    user: "system",
    password: "yourpassword",
    connectString: "localhost/XE"
};

async function connectDB() {
    try {
        const connection = await oracledb.getConnection(dbConfig);
        console.log("✅ Connected to Oracle Database");
        return connection;
    } catch (err) {
        console.error("❌ Database connection failed:", err);
    }
}

module.exports = connectDB;
