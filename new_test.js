import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from 'k6/data';

export let options = {
   stages:[
    {duration:'5m',  target:200},
    {duration:'20m', target:200},
    {duration:'5m',  target:200}
   ]
};

const dates=new SharedArray('dates',function(){
    var dates=[];
    var currentDate=new Date();
    var minDate= new Date();
    minDate.setFullYear(currentDate.getFullYear()-100);

    for(var i =0; i <100; i++){
        var randomTime=Math.random() *(currentDate.getTime() -min- minDate);
        var randomDate=new Date(minDate.getTime() +randomTime);
        dates.push(randomDate.toISOString());
    }
    return dates;
})

export default function () {
    const res = http.get('https://localhost:7033/weatherforecast'); // Capture the response in the 'res' variable

    // Check the response status
    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    // Uncomment the sleep if needed
    // sleep(1); // Sleep for 1 second between requests

}
//to install k6 ==>     winget install k6 --source winget
//use to run ==> k6 run simple-test.js


