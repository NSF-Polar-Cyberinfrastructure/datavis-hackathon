NSF DataViz Hackathon for Polar CyberInfrastructure
=======

This is the logistical home for the upcoming workshop on [Polar DataViz and a hackathon
on Polar CyberInfrastructure](http://nsf-polar-cyberinfrastructure.github.io/datavis-hackathon/), sponsored by the [National Science Foundation](http://www.nsf.gov/) 
funded project [PLR-1348450](http://www.nsf.gov/awardsearch/showAward?AWD_ID=1348450&HistoricalAwards=false) and [PLR-144562](http://www.nsf.gov/awardsearch/showAward?AWD_ID=1445624&HistoricalAwards=false).

The organization of this tree is as follows:

* static - Static portions of the website (CSS, JS, resources)
* code - Includes sub-folders of ALv2 licensed code produced by each session.
* report - The report from the workshop.
* index.html - The actual web site.

Tweeting and Social Media
===
If you are considering tweeting about the site, please use the hashtag [#nsfpolardatavis](https://twitter.com/search?f=realtime&q=%23nsfpolardatavis)

If you use [Google Plus](http://plus.google.com), please consider leveraging our
Google Group/Event Group [here](https://plus.google.com/events/ccvo3qic56jku72r40haqjnlf74).

Website
===
[http://nsf-polar-cyberinfrastructure.github.io/datavis-hackathon/](http://nsf-polar-cyberinfrastructure.github.io/datavis-hackathon/)

Amazon Instance and Data Buckets
===
We have an Amazon Virtual Machine setup for the Hackathon attendees to access and use for storing and processing data. You should contact @MBoustani, @chrismattmann, @lewismc or @darth-pr for a username and login credentials for the machine if you wish to use it. Once you have feedback, progress with the following instructions:

The machine can be accessed by using the ssh program as follows.
```
ssh nsfpolardata.dyndns.org
```
login: `<username>`

password: NewPass4u

We have a shared account on the machine which we encourage you to use. This can be accessed as follows.
```
ssh ndeploy@localhost
```
We also have s3 data buckets configured and available for each [proposed session](http://nsf-polar-cyberinfrastructure.github.io/datavis-hackathon/#sessions). These can be accessed from the ndeploy account using the s3cmd as follows:
```
[ndeploy@nsfpolardata ~]$ s3cmd ls
2014-11-03 14:27  s3://nsf-issue-1
2014-11-03 14:27  s3://nsf-issue-11
2014-11-03 14:27  s3://nsf-issue-14
2014-11-03 14:27  s3://nsf-issue-15
2014-11-03 14:27  s3://nsf-issue-3
2014-11-03 14:27  s3://nsf-issue-42
2014-11-03 14:27  s3://nsf-issue-43
2014-11-03 14:26  s3://nsf-issue-48
2014-11-03 14:26  s3://nsf-issue-50
2014-11-03 14:26  s3://nsf-issue-66
2014-11-03 14:26  s3://nsf-issue-74
2014-11-03 14:26  s3://nsf-issue-77
2014-11-03 14:26  s3://nsf-issue-78
2014-11-03 14:26  s3://nsf-issue-79
2014-11-03 14:25  s3://nsf-issue-82
2014-11-03 14:25  s3://nsf-issue-85
2014-11-03 14:27  s3://nsf-issue-9
```
You can also use other s3cmd 
```
s3cmd put
...
s3cmd get
```


etc.
```

