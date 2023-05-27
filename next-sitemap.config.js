const siteUrl = "https://www.vipulsingh.in.net/";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: "/" },
        ],
    },
};