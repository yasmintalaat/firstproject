var q_1 =
[
    "-Be the change that you wish to see in the world.-",
    "-You only live once, but if you do it right, once is enough.-",
    "-I would like to paint the way a bird sings.-",

]
var his_name =
[
    "--Claude Monet",
    "--Oliver Herford",
    "--Melody Carstairs",
    "--Alysha Speer"

]


function QUOTES()
{
    var randomIndex = Math.floor(Math.random() * q_1.length);
    var randomName = Math.floor(Math.random() * his_name.length);
    document.getElementById("q_1").innerHTML= q_1[randomIndex];
    document.getElementById("his_name").innerHTML= his_name[randomName];

}