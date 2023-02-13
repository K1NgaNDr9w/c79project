menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Veg Supreme Pizza",
                        "Paneer Tikka Pizza",
                        "Deluxe Veggie Pizza",
                        "Veg Extravaganza Pizza",
                        "futngvkvgdskrhgtxdrkgtvndrhxktvhddrvjtxdejgtvxhdfknchygkduftvhekdshvsginuhyglryvgtjrdtvnugsktjbgmxdrhknvigdfmthdvrkfigtjdrygfldkrtgghgdfgkudfhgkdfjjhgdkhgfjghdfkghkfhgjfljrhykjfdhgkjgfglirgjtrghtriogtdiugdtgjrtyjhfgkjhriuyrhgyetiuotydriuobyvdrfinvgdfjngvdfhckughdkgdfkghdfjgdkjgdfhbhjzgfkjhjdffnmdfshgkjdhgkdhgrkjghdsgddsrc,xykrdnc,y,gkdtgdrgkidrhvkgvnnkrdfnhgrmdfnhkgvuhkerhfvrjmgfrnekvtyerktgdrskvgfvidkgfdfuygdifhrgheiusndfviehvuyfdnivjgrnevoigrbivrwjnfdicjgsunijesbgvufdinhsoburbgvyuhfskegvwidshkfvidsbuhfloidsbvhdfkzxignvfdljvxbcinglxuodthfrdjkvzndfluohgdriujxgnorheewilbrohibv;lrwuhtreofwkldhufrmtesiybsmgmdoifubymochtfviky bhjtfcgnjrtdkvdtgiudrlftmgikdrfgfghgxloccnvrtfgkbhgtrjivymtrnfdiyhgdofgnudrofiyutbw5v4ne0r96noe85y06m54uerinfybihftudrjhgdrjkhdfckjgbxvhcfhgbgrdkvhjgkudfjg,hdfkj,bfhgkjdtgxfklgyidfjxcbvhersdkghxckhgdtfkjhtrbghrdtkgjdhnkjvghkinvgfnhiurygnveriutneryilturhtrkdnytviuerygke tvnuryiygurdiyugvndfnguydrmiygrensgiuedrshmkngvendfhgdnfvgynerdiutnrdtjghndfkygvdfivnydfniugynreejntjvgdctkgndhrtvnugritgernhungvntrngkjenhgcuyjfrhmbctifvnygvusdrcgheriumgcrnidrhftcyufmdgvnfrhegurejcxiugtimcvfivhiumxbtvtugxhriuxhmeivhrmgmgirjmufhdsifhdigjgfijdfbgdfkjghrhjgdjbhdsjkfgserhkjvndfjkghtriughbcvhdgerjfulghrjgbrghdckjfhdgiuyr87erhureghyuerhtrueghrjhrgtgrthtrhtrgtrgrthrthjgrjfdgjdfhfkgnvberhmvnhxgkdghtmkynhujrhmcngihergyuxmvthugtreuxvh,bnjfcgmtrkjmcgbkjxfgmerjnxgnvkngrxhjgfjbmgfesghghdffhgfhdgffdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",];
    
    function getmenu(){
        var htmldata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_").innerHTML = htmldata;
        //give the appropriate id name as display_menu 
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg1.png">'
        var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

    function add_top(){
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        add_item();
}
