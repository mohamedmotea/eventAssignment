
// Sidebar Section
$(".btn-option").css("right",-$(".btn-option").innerWidth());
$("#btnOption").click(_=>{
    if($(".sidebar").css("left") == "0px"){
       $(".sidebar").css("left", -$(".sidebar .option").innerWidth())
    }else{
        $(".sidebar").css("left", "0px")
  
    }
})

// Close Mark
$("#closeMark").click(_=>{
    $(".sidebar").css("left", -$(".sidebar .option").innerWidth())
})

// Slide Singer Section
$(".singer .box p").eq(0).css("display","block")
$(".singer .box h2").click(function(ev){
    let singH2 = $(ev.target).next()
    singH2.slideToggle(50)
   
})


let counter = setInterval(_=>{
    
    let newYear = new Date("2024/1/1").getTime();
    let dateNow = new Date().getTime();
    let year = new Date("2024/1/1").getFullYear()

    let counterTime = newYear - dateNow

    if(counterTime == 0){
        year = new Date("2025/1/1").getFullYear();
        newYear = new Date("2025/1/1").getTime();
    }
     counterTime = newYear - dateNow
    
    let days = Math.floor(counterTime / (1000 * 60 * 60 * 24))
    document.getElementById("days").innerHTML = days

    let hours = Math.floor(counterTime % (1000 * 60 * 60 *24) / 1000 / 60 / 60)
    document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
   
    let minuts = Math.floor(counterTime % (1000 * 60 * 60) / (1000 * 60))
    document.getElementById("minuts").innerHTML = minuts < 10 ? `0${minuts}` : minuts;

    let seconds = Math.floor(counterTime %(1000*60) / (1000))
    document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;


    document.getElementById("year").innerHTML = year 


},1000)


let maxLengthArea = 100;
$("#textAreaCounter").html(maxLengthArea) 


$("#textArea").keyup(function(){
    let textAreaLength = $("#textArea").val().length;
    
 $("#textAreaCounter").html(maxLengthArea - textAreaLength) 

    document.getElementById("textAreaCounter").innerHTML = maxLengthArea - textAreaLength;
    if(maxLengthArea - textAreaLength <= 0){
    document.getElementById("textAreaCounter").innerHTML = `your available character finished`;
    $("#submit").attr("disabled","");

    }else{
    $("#submit").removeAttr("disabled")

    }
})