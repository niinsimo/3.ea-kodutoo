document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("logout").addEventListener("click", logout);
});

function logout(){
    let myArray = ['https://www.youtube.com/logout', 'https://twitter.com/logout', 'https://github.com/logout', 'https://www.pinterest.com/?logged_out=true']
    var randomlogout = myArray[Math.floor(Math.random() * myArray.length)];
    window.open(randomlogout);
    logout2();
}
