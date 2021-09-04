/*
Copyright (C) 2021 sixtysixgames

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* 
    Created on : 7 Aug 2021, 10:59:41
    Author     : sixtysixgames
*/
var aMFirst = new Array(
    "Alvin", "Barry", "Bobby", "Boris", "Chris", "Dave", "Elvin", "Freddie", "Jack", "Jimmy", "Gary", "Harry", "Johnny", "Sam", "Stevie", "Tommy", "Woody"
);
    var aFFirst = new Array(
    "Chrissy", "Dandy", "Fluffy", "Holly", "Ivy", "Maggie", "Mary", "Nikki", "Pearl", "Ruby", "Rose", "Rosy", "Sammie", "Suzy"
);

    var aLast = new Array(
    "Blue", "Bluelove", "Bright", "Dazzle", "Diamond", "Dream", "Dreamlove", "Dreamy", "Emerald", "Flowers", "Gem", "Glitter", "Gold", "Goldlove", "Golddream", "Golden", "Goldendream", "Green", "Greenlove", "Harmony", "Jupiter", "Love", "Melody", "Mercury", "Moonlight", "Moonlove", "Moonshine", "Nice", "Nicedream", "Nicelove", "Purple", "Rainbow", "Sapphire", "Saturn", "Shine", "Silver", "Smile", "Sparkle", "Star", "Stardust", "Starlight", "Starlove", "Starshine", "Sunlight", "Sunlove", "Sunshine", "Twinkle", "Venus", "Wonderful"
);

    function rand(i){
        ret = Math.random() * i;
        ret = Math.round(ret);
        return ret;
    }

    function getName(){

        with(document.frmGlamName){

            if (txtName.value == ""){
                if(chkIsMale.checked){
                    var fname = aMFirst[rand(aMFirst.length-1)];
                }else{
                    var fname = aFFirst[rand(aFFirst.length-1)];
                }
                var lname = aLast[rand(aLast.length-1)];
            } else {
                var num = 0;
                for(var i=0;i<txtName.value.length;i++){
                    if (txtName.value.charAt(i) != " "){
                        num += txtName.value.charCodeAt(i);
                    }
                }

                if(chkIsMale.checked){
                    var fname = aMFirst[num % (aMFirst.length-1)];
                }else{
                    var fname = aFFirst[num % (aFFirst.length-1)];
                }
                var lname = aLast[num % (aLast.length-1)];
            }

            txtGlamName.value = fname + " " + lname;
        }
    }

