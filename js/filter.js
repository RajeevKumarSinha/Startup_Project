let bakedItems = [{
    image: "images/ardino.jpg",
    name: 'Ardino',
    price: 'Rs.50',
    category: "pcb"
},
{
    image: 'images/breadboard.jpg',
    name: 'Breadboard',
    price: 'Rs.50',
    category: "pcb"
}, {
    image: 'images/raspberry.jpg',
    name: 'Raspberry pi v4',
    price: 'Rs.50',
    category: "pcb"
},
{
    image: 'images/IC.jpg',
    name: 'IC',
    price: 'Rs.200',
    category: "parts"
},
{
    image: 'images/resistors.png',
    name: 'Resistors',
    price: 'Rs.200',
    category: "parts"
},
{
    image: 'images/wires.jpg',
    name: 'Led(pack of 8)',
    price: 'Rs.200',
    category: "parts"
}, {
    image: 'images/led.jpg',
    name: 'Wires(pack of 50)',
    price: 'Rs.200',
    category: "parts"
},
{
    image: 'images/screwdriver.png',
    name: 'Screw Driver',
    price: 'Rs.150',
    category: "tools"
},
{
    image: 'images/solderingiron.png',
    name: 'Soldering Iron',
    price: 'Rs.150',
    category: "tools"
},
{
    image: 'images/wireclipper.jpg',
    name: 'Wire Clipper',
    price: 'Rs.200',
    category: "tools"
}, {
    image: 'images/firealarmkit.jpg',
    name: 'Fire Alarm Kit',
    price: 'Rs.550',
    category: "kit"
},
{
    image: 'images/motionsensorkit.jpg',
    name: 'Motion Sensor Kit',
    price: 'Rs.550',
    category: "kit"
},
{
    image: 'images/wirelesschargingkit.jpg',
    name: 'Wireless Charging Kit',
    price: 'Rs.550',
    category: "kit"
}];


(function () {
    var x;

    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-none');
        document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        // console.log(itm)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
    }
})();


// function for all button 

const allid = document.getElementById('all');

allid.addEventListener('click', () => {
    var x;
    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-none');
        document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        console.log(itm)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
    }
})

// function for pcb button 

const cakeid = document.getElementById('pcb');

cakeid.addEventListener('click', () => {
    var x;
    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-inline');
        document.getElementById('card'+x.toString()).classList.add('d-none');
        if(bakedItems[x].category.includes('pcb')){
            document.getElementById('card'+x.toString()).classList.remove('d-none');
            document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        console.log(bakedItems[x].name)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
        }
    }
})

// function for parts button 

const cupcakeid = document.getElementById('parts');

cupcakeid.addEventListener('click', () => {
    var x;
    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-inline');
        document.getElementById('card'+x.toString()).classList.add('d-none');
        if(bakedItems[x].category.includes('parts')){
            document.getElementById('card'+x.toString()).classList.remove('d-none');
            document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        console.log(bakedItems[x].name)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
        }
    }
})

// function for tools button

const sweetsid = document.getElementById('tools');

sweetsid.addEventListener('click', () => {
    var x;
    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-inline');
        document.getElementById('card'+x.toString()).classList.add('d-none');
        if(bakedItems[x].category.includes('tools')){
            document.getElementById('card'+x.toString()).classList.remove('d-none');
            document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        console.log(bakedItems[x].name)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
        }
    }
})


// function for kit button 

const doughnutid = document.getElementById('kit');

doughnutid.addEventListener('click', () => {
    var x;
    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-inline');
        document.getElementById('card'+x.toString()).classList.add('d-none');
        if(bakedItems[x].category.includes('kit')){
            document.getElementById('card'+x.toString()).classList.remove('d-none');
            document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        console.log(bakedItems[x].name)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
        }
    }
})

const usrInpt=document.getElementById('usrText');

function search(){
    // console.log(usrInpt.value)
    if(usrInpt.value !=null){
        var x;
        for( x=0; x<bakedItems.length;x++){
            document.getElementById('card'+x.toString()).classList.remove('d-inline');
            document.getElementById('card'+x.toString()).classList.add('d-none');
            if(bakedItems[x].name.toLowerCase().includes(usrInpt.value.toLowerCase())){
                document.getElementById('card'+x.toString()).classList.remove('d-none');
                document.getElementById('card'+x.toString()).classList.add('d-inline');
            var itm="items"+x.toString();
            console.log(bakedItems[x].name)
            document.getElementById(itm).src= bakedItems[x].image;
            
            document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
            // console.log('nameItem'+x.toString())
            document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
            }
        }

    }
}