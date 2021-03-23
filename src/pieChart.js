function loadPieChart() {
        //random RGB colors
        function randomBg() {
            let colorHEX = "";
            return colorHEX = "#" + Math.floor((Math.random() * 1000000));
            
            }
        
            //pie chart create random percentages for tranfrom rotate style
            document.getElementById('Pcontainer').addEventListener('click', () => {
            for (let i = 1; i < 7; i++) {
                let slice = 'pieSlice' + i;
                let degree = Math.round(Math.random() * 180);
                document.getElementById(slice).getElementsByClassName('pie')[0].style.transform = "rotate(" + degree + "deg)";
        
        
                document.getElementById('header').style.background = randomBg();
                }
            })
        
            
}