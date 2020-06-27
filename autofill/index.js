function billingFunction(){
        let a = document.getElementById('same');
        if(a.checked){
                let shippingName = document.getElementById('shippingName');
                let shippingZip = document.getElementById('shippingZip');

                let billingName = document.getElementById('billingName');
                let billingZip = document.getElementById('billingZip');

                billingName.value = shippingName.value;
                billingZip.value = shippingZip.value;
        }
        else{
                billingName.value = "";
                billingZip.value = "";
        }
}