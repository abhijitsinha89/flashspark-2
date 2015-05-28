(function () {
    'use strict';

    var serviceId = 'dbdata';
    angular.module('app').factory(serviceId, ['common', '$resource', dbdata]);

    function dbdata(common, $resource) {
        var $q = common.$q;

        var service = {
            getData: getData,
            timelineData: timelineData,
            faqData: faqData,
            workData: workData,
            fluffData: fluffData,
            inspireData : inspireData
        };

        return service;

        function getData(callPath) {
            var setCall = $resource('/api/Values/' + callPath, { cache: true }),
                data = setCall.query({}).$promise;
            return $q.when(data);
        }

        function timelineData() {
            var timeline =
            [
            {
                "Year": "2014",
                "Updates": [
                    { "id": "2014U07", "Description": "After numerous changes in the design, <a href='http://flashspark.in' target='_blank'>Flashspark.in </a> is running on a new revamped version!" },
                    { "id": "2014U06", "Description": "Beta version of <a href='http://hummingnest.com' target='_blank'>HummingNest</a> launched, it runs on wordpress with a custom theme for the webapp" },
                    { "id": "2014U05", "Description": "alpha version of <a href='http://scrollkart.com' target='_blank'>Scrollkart</a> launched " },
                    { "id": "2014U04", "Description": "Moved from <strong>Hyderabad to Bangalore </strong> and started working for <strong> as a Usability Developer in Wipro, Bangalore </strong>" },
                    { "id": "2014U03", "Description": "Reviving my old web magazine <a href='http://bearded-penguins.com' target='_blank'>www.visivoline.com (Bearded Penguins)</a> with <a href='http://facebook.com/'>Utkarsh</a> and <a href='http://facebook.com/'>Ankit</a> in a new package with the technology web loves! AngularJS <i class='emo-happy'></i>" },
                    { "id": "2014U02", "Description": "Excited to Work on mobile platfroms" },
                    { "id": "2014U01", "Description": "Immediate Targets: Angular JS and Node JS" }
                ]
            },
            {
                "Year": "2013",
                "Updates": [
                    { "id": "2013U02", "Description": "Designed and launched <em>www.vishaltraders.org</em>. This website is retired now" },
                    { "id": "2013U01", "Description": "Launched <a href='http://www.old.flashspark.in' target='_blank'> FlashSpark V1</a> It is built on ASP.NET MVC Web API and AngularJS and relies a lot on SVG and Bootstrap CSS" }
                ]
            },
            {
                "Year": "2012",
                "Updates": [
                    { "id": "2012U05", "Description": "Completed a project dessertation on creating on an <em>Low Cost Effective Home Automation System.</em> It was built primarily on Matlab and C#, Drupal for front end design, Atmega 16 MCU for hardware." },
                    { "id": "2012U04", "Description": "Graduated from Amity University, Noida" },
                    { "id": "2012U03", "Description": "Joined Wipro Technologies as a Project Engineer in Hyderabad" },
                    { "id": "2012U02", "Description": "Trained in MS Technolgies" },
                    { "id": "2012U01", "Description": "Joined a Microsoft based project as a test Engineer" }
                ]
            },
            {
                "Year": "Daysofyore",
                "Updates": [
                { "id": "DaysofyoreU08", "Description": "<strong>2011:</strong> designed and administered www.weatamity.com(we used to post assignments and old testpapers for public benefit! :P )" },
                { "id": "DaysofyoreU07", "Description": "<strong>2011:</strong> Internship in Whirlpool of India" },
                { "id": "DaysofyoreU06", "Description": "<strong>2010:</strong> Inhouse project 'German to English translater'" },
                { "id": "DaysofyoreU05", "Description": "<strong>2009:</strong> Started an online magazine with Utkarsh bhatia, www.visivonline.com, we are in the process of reviving it again" },
                { "id": "DaysofyoreU04", "Description": "<strong>2009:</strong> Designed a wired robot with Abhijeet Verma for IIT Kanpur techfest 'Techkriti', great learning experience" },
                { "id": "DaysofyoreU03", "Description": "<strong>2008:</strong> Joined Engineering in 'Electronics and Communication'from Amity University'" },
                { "id": "DaysofyoreU02", "Description": "<strong>2007:</strong> Completed Schooling from DPSG" },
                { "id": "DaysofyoreU01", "Description": "<strong>1989:</strong>  Born! :P" }
                ]
            }
            ];
            return $q.when(timeline);

        }

        function workData() {
            var work =
            [
                { "id": "2014W01", "title": "Flashspark V2", "url":"flashspark-v2" , "Description": "The site you are browsing on! it now adorns a new pair of jeans!", "ImgURL": "/Content/timeline-images/flashspark.PNG", "URL": "<a href='#'>www.flashspark.in</a>" },
                { "id": "2014W02", "title": "HummingNest", "url": "hummingnest", "Description": "This is a real estate listing website for an upcoming company in NCR.<br /> Website is coded on <strong>Wordpress</strong> and it uses a custom theme specifically built for this website. <br /> The theme is repsponsive and uses grid system from Bootstrap", "ImgURL": "/Content/timeline-images/hummingnest.PNG", "URL": "<a href='http://www.hummingnest.com' target='_blank'>www.hummingnest.com</a>" },
                { "id": "2014W03", "title": "ScrollKart", "url": "scrollkart", "Description": "A light weight shopping cart, made for making electronic components like MCU, Registers more widely available! The core of the site is <strong> ASP.NET MVC 4 </strong> on a open source CMS <strong>nopCommerce</strong>. The theme is build from scratch and appropriate additions are done to the CMS.", "ImgURL": "/Content/timeline-images/scrollkart.PNG", "URL": "<a href='http://www.scrollkart.com' target='_blank'>www.scrollkart.com</a>" },
                { "id": "2014W04", "title": "Bearded Penguins", "url": "bearded-penguins", "Description": "When fully developed this will house articles and all you ever wanted to read, the penguin baba's with all their bearded wisdoms will be giving you all the gyaan!!", "ImgURL": "/Content/timeline-images/generic-photo.png", "URL": "<a href='http://www.bearded-penguins.com' target='_blank'>www.bearded-penguins.com</a>" },
                { "id": "2013W01", "title": "Flashspark V1", "url": "flashspark-v1", "Description": "The concept for the site came up as a way to learn and implement new technologies I was learning. The development of the website started with <strong>ASP.NET</strong>, a technology I was familiar with to its current form <strong>AngularJS!</strong>", "ImgURL": "/Content/timeline-images/flashspark.old.png", "URL": "<a href='http://www.old.flashspark.in' target='_blank'>www.old.flashspark.in</a>" },
                { "id": "2013W02", "title": "Vishal Traders(Retired)", "url": "vishal-traders-(retired)", "Description": "Vishal Traders was a steel trading company dealing with TMT bars and building materials. This website was my first attempt at building a <em> published on the internet website </em> It was built on ASP.NET and SQL Server.", "ImgURL": "/Content/timeline-images/generic-photo.png", "URL": "This project is now retired" },
                { "id": "2012W01", "title": "Low Cost Effective Home Automation System", "url": "low-cost-effective-home-automation-system", "Description": "Submitted a prototype model on ‘An efficient approach to monitor and manage automated devices from remote locations’<br />The design focused on improving the service provider end by adding software solutions over the existing hardware use.", "ImgURL": "/Content/timeline-images/generic-photo.png", "URL": "<a href='https://www.dropbox.com/s/164sd3ropofg1xi/Final%20Project.tar.gz?dl=0'>Dropbox Link</a>" },
                { "id": "DaysofyoreW01", "title": "WeAtAmity(Retired)", "url": "weatamity-(retired)", "Description": "Designed and administered the portal.It was designed with an open source tool DRUPAL 6.2.<br />This portal was designed as a common ground for students of my alma mater to interact and share their interests among themselves.", "ImgURL": "/Content/timeline-images/generic-photo.png", "URL": "This project is now retired" },
                { "id": "DaysofyoreW02", "title": "German English Translator", "url": "german-english-translator", "Description": "Electronics is fun and it cane be a lot of fun, if you are building something of your own. And it is exactly what it was when I attempted my first brush with microcontrollers! <br /> A simple device where I paired some english words with german and display them on two screens!", "ImgURL": "/Content/timeline-images/generic-photo.png", "URL": "Sorry no URL available" },
                { "id": "DaysofyoreW03", "title": "Visivonline", "url": "visivoline", "Description": "My first attempt at making a website, Static HTML pages using Dreamweaver, before I discovered Wordpress and life changed a lot!!<br /><strong>My affair with the web began here!!</strong><i class='emo-happy'></i>", "ImgURL": "/Content/timeline-images/generic-photo.png", "URL": "Sorry no URL available" }
            ];
            return $q.when(work);

        }

        function faqData() {
            var faq =
            [
            { "Question": "Let’s begin by asking, who are you and what you do?", "Answer": "I am a web enthusiast and in love with the possibilities that web apps have provided us in the recent times! My first interaction with the web was during my school time at Delhi Public School Ghaziabad and it continues till date.I hold an engineering degree in Electronics and Communication from Amity University and I am currently part of <span class='fa-1x'> Wipro Technologies,Bangalore as a Usability Developer </span> where we work to build beautiful, responsive and vibrant websites.<i class='emo-happy'></i>" },
            { "Question": "What does an average day hold for you?", "Answer": "My daily musings include <em>Learning to breathe, trying to get wings to fly! <i class='emo-tongue'></i> </em> I have varied interests which ranges from writing, coding to cooking  and reading comics {addict alert!} depending on the mood and time frame." },
            { "Question": "Any specific reason for making this website?", "Answer": "Internet has always been a very fascinating topic for me and I wanted to have some space that belonged to me under this sun!This is an attempt to jump start the process. Also working on projects like these helps you understand a lot of concepts in a much better way and I can very delightfully say that after the completion of this site, I am a more learned man!" },
            { "Question": "You say, you like the potential of web. What about web attracts you?", "Answer": "The evolution of web in the last decade (the approximate amount of the time, I have been its user!) has been almost exmplerary. It has truly shrunk the boundaries in every conceivable way.We have already began our journey into the new era where virtual world is not confined to a handful of devices! In such a place internet is what connects everything like nodes, hence its better understanding should be considered as a prequisite." },
            { "Question": "Tell us about the tools and technologies you are comfortable with?", "Answer": "I learnt a good deal about Oracle and Visual Basic during my school time. By the time I joined my college, I was very much interested in learning semiconductor devices and focussed on the same but kept my interest for web going, by learning wordpress and drupal. Now I work with ASP.NET, MVC, SQL Server,HTML5, JQuery, CSS 3, Angular JS and SVG. Recently I started learning php and Wordpress {quite facinating!}" },
            { "Question": "Why is there no copyright notice on this website?", "Answer": "Aha! Its like the 1st law of thermodynamics!!<em> Knowledge cannot be created or destroyed, it just changes from brain to another! </em> Whatever I have used in this website or the ideas I have presented have been polished using the internet only, so everything is open for redistribution! All I ask, is that if there is something interesting, please contact me as I might be able to contribute more. <a href='mailto:abhijit.sinha@outlook.com'>abhijit.sinha@outlook.com</a>" },
            { "Question": "Finally, who came up with this douchy idea of interviewing yourself!", "Answer": "Hey! Well, after completing this section, it does looks a bit pompous! I guess, one of the perks of making your own webpage <i class='emo-wink'></i>." }
            ];
            return $q.when(faq);

        }

        function fluffData() {
            var fluff =
            [
            { "1": "<a href=''> The story of phyiscs! </a> " },
            { "2": "<a href=''> Why to code  </a>" },
            { "3": "<a href=''> <i class='fa fa-smile-o></i>'Angular Love!  </a>" },
            { "4": "<a href=''> I currently work at Wipro  </a>" },
            { "5": "<a href=''> Some experiments with Wordpress  </a>" },
            { "6": "<a href=''> Ooooo! Physics  </a>" },
            { "7": "<a href=''> Music the rhthym of life    </a>" },
            { "8": "<a href=''> Currently working on :   </a>" },
            { "9": "<a href=''> Bearded Penguins </a>" },
            { "10": "<a href=''> College </a>" }
            ];
            return $q.when(fluff);

        }

        function inspireData() {
            var inspire =
            [
                { "id": "I01", "title": "", "url": "", "Description": "", "ImgURL": "", "URL": "<a href='#'></a>" },
                { "id": "I02", "title": "", "url": "", "Description": "", "ImgURL": "", "URL": "<a href='#'></a>" },
                { "id": "I03", "title": "", "url": "", "Description": "", "ImgURL": "", "URL": "<a href='#'></a>" },
                { "id": "I04", "title": "", "url": "", "Description": "", "ImgURL": "", "URL": "<a href='#'></a>" },
                { "id": "I05", "title": "", "url": "", "Description": "", "ImgURL": "", "URL": "<a href='#'></a>" },
                { "id": "I05", "title": "", "url": "", "Description": "", "ImgURL": "", "URL": "<a href='#'></a>" },
                { "id": "I06", "title": "", "url": "", "Description": "", "ImgURL": "", "URL": "<a href='#'></a>" },
                { "id": "I07", "title": "", "url": "", "Description": "", "ImgURL": "", "URL": "<a href='#'></a>" },
                { "id": "I08", "title": "", "url": "", "Description": "", "ImgURL": "", "URL": "<a href='#'></a>" },
                { "id": "I09", "title": "", "url": "", "Description": "", "ImgURL": "", "URL": "<a href='#'></a>" }
            ];
            return $q.when(inspire);

        }

    }

})();
