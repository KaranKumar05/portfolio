// let typed = new typed(".multi-headline",{
//     strings:["Frontend Developer",  "MERN Developer","Graphic Designer","Freelancer","Bloger"],
//     typeSpeed:80,
//     backSpeed:80,
//     backdelay:1000,
//     loop:true
// });

let headingChange = {
    heading: function () {
        var headings = ['Hello', 'Hi', 'Ye'];
        for (var i = 0; i < headings.length; i++) {
            document.getElementById('heading').innerHTML = headings[i];
        }
    }
};   