const CORSData = (req,res) => {
    res.send([
        {
            "id":1,
            "title":"Symbol of Love",
            "category":"tourism",
            "description":"In its harmonious proportions and its fluid incorporation of decorative elements, the Taj Mahal is distinguished as the finest example of Mughal architecture, a blend of Indian, Persian, and Islamic styles. Other attractions include twin mosque buildings (placed symmetrically on either side of the mausoleum), lovely gardens, and a museum. One of the most beautiful structural compositions in the world, the Taj Mahal is also one of the world’s most iconic monuments, visited by millions of tourists each year. The complex was designated a UNESCO World Heritage site in 1983.",
            "cover":"https://tse3.mm.bing.net/th?id=OIP.5qTkPorw28VRPTcKUWFBMwHaFV&pid=Api&P=0",
            "published":"Tourism/ 27/2022"
    
        },
        {
            "id":2,
            "title":"The india gate",
            "category":"tourism",
            "description":"India Gate Delhi is much more than a war memorial. Presenting an imposing architectural beauty, it captivates everyone. The sight is all the more alluring in evening when the memorial and the surrounding area is lit up with innumerable lights. Light show at India Gateis something that one mustn’t miss when on a tour to Delhi.",
            "cover":"https://tse1.mm.bing.net/th?id=OIP.fDJRP3intUq_w1Q5GxTk-gHaFj&pid=Api&P=0",
            "published":"Tourism/ 27/2022"
        },
        {
            "id":3,
            "title":"Hawa Mahal",
            "category":"tourism",
            "description":"The Hawa Mahal is a palace in the city of Jaipur, India.Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, the founder of the city of Jaipur, India.[1] He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace.",
            "cover":"https://tse3.mm.bing.net/th?id=OIP.rCrmD4v8wkEq2knJwOxzWwHaFN&pid=Api&P=0",
            "published":"Tourism/ 27/2022"
    
        }
    ])
}

module.exports.dataApi = CORSData;