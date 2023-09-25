export function changePage(pathArray) {
    $("#bread-crumb").html(``);

    if(pathArray == ""){
        // $("#app").html("home");
        $.get(`pages/home.html`, (data) => {
            $("#app").html(data);
        }).fail(() => {
            console.log("failed");
        })

    } else {

        // $("#app").html("");

        if(pathArray.length == 1){

            $.get(`pages/${pathArray}.html`, (data) => {
                if(data){
                    $("#app").html(data);
                } else {
                    console.log("failed");
                }
            })
        }else{
            $("#bread-crumb").html(`<a href="#${pathArray[0]}">${pathArray[0]}</a> / ${pathArray[1]}`);
            
            $.get(`pages/${pathArray[1]}.html`, (data) => {
                if(data){
                    $("#app").html(data);
                } else {
                    console.log("failed");
                }
            })
        }

        
        // }).fail(() => {
        //     console.log("failed");
        // }
    }
}