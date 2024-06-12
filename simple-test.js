import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from 'k6/data';



export let options = {
    vus: 1, // Number of virtual users
    duration: '11s', // Duration of the test
    maxRedirects: 0,
    noConnectionReuse: false,
    insecureSkipTLSVerify: true
};


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


// scenarios:
// السيناريو اللي انت شغال عليه هو واحد، فيه مستخدم افتراضي (VU) واحد لمدة 11 ثانية.
// الإحصائيات المهمة:
// status is 200:

// النسبة دي بتقولك إن 0% من الطلبات اللي بعتها رجعت بحالة 200 (OK). يعني 20 طلب نجحوا، و34004 طلب فشلوا.
// checks:

// هنا بيقولك إن نسبة الطلبات اللي عدت بنجاح هي 0.05%. يعني 20 طلب نجحوا، و34004 طلب فشلوا.
// data_received و data_sent:

// كمية البيانات اللي استقبلتها (1.5 ميجابايت) واللي بعتها (1.5 ميجابايت) بمعدل 140 كيلوبايت في الثانية للبيانات المستقبلة و133 كيلوبايت في الثانية للبيانات المرسلة.
// http_req_duration:

// متوسط مدة الطلب كانت 233.23 ميكرو ثانية. أسرع طلب استغرق 0 ثانية (أقل من ميكرو ثانية)، وأبطأ طلب استغرق 35.25 مللي ثانية.
// في 90% من الوقت، الطلبات كانت بتاخد أقل من 999.6 ميكرو ثانية.
// http_req_failed:

// نسبة الطلبات اللي فشلت هي 99.94%. يعني معظم الطلبات فشلت.
// http_reqs:

// عدد الطلبات اللي بعتها هو 34024 طلب بمعدل 3092.97 طلب في الثانية.
// iteration_duration:

// متوسط مدة الدورة (من بداية الطلب لنهايته) كانت 314.13 ميكرو ثانية.
// iterations:

// عدد الدورات اللي تمت هو 34024 دورة بمعدل 3092.97 دورة في الثانية.

