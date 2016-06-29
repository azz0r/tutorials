/*http://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/

before we continue lets discuss what ECMAScript is;
Lots of reading from a cheat sheet

javascript started as part of netscape navigator and was called live script
later that year it was renamed javascript due to the popularity of java, theres no relation.
Later it was submitted to the ECMA International for standardisation as a new language
It was labeled ECMA script; the name never stuck, javascript did stick.
in 1999 ESMAScript 3 came out and ruled all the way up to 2009 when 5 was released
ESCMA 4 was canceled: due to conflicts on opinions for the languages future direction


Around 2012 things started to change. There was more of a push
to stop supporting old Internet Explorer versions, and writing code
in ECMAScript 5 (ES5) style became much more feasible. At the same
time work was underway on a new ECMAScript standard, at which point
 it became much more common to start referring to JavaScript
 implementations in terms of their support for different
 ECMAScript standards. The new standard was
 originally named ES.Harmony, before eventually being
 referred to as ECMAScript 6th Edition (ES6). In 2015
 the committee responsible for drafting the ECMAScript specifications,
  made the decision to move to a yearly model for defining new standards,
where new features would be added as they were approved,
rather than drafting complete planned out specs that would only be finalized when all features were ready. As a result ECMAScript 6th edition was renamed ECMAScript 2015 (ES2015) before it was published in June.

This now means we have es6 + es2015 and es2016

how does that work? Well the code your about to see, in es6 format, gets
"transpiled" into es5 (98% of current browsers support es5, inc ie9)

transpilied means it literally turns new code into old code, we'll see some examples
