var text = prompt("Enter the text to search");
var searchText = 'Lorem ipsum dolor sit Pakistan, consectetur adipisicing elit. Perspiciatis, minima esse? Nisi dicta, Pakistan dolores reprehenderit officia veritatis fugit est! Lorem ipsum Pakistan dolor sit amet, consectetur adipisicing elit. Perspiciatis, minima esse? Nisi dicta, provident dolores reprehenderit officia veritatis fugit est!';
document.write(searchText)

var 
count = 0;
for(var i=0; i < searchText.length; i++){

    if(searchText.slice(i, i+text.length) == text){
        count++
    }
}
console.log(count);