#!/bin/bash

for i in $(find . -name "index.html"); do
    a=$(grep -o '/' <<< "$i" | grep -c .)
    
    if [ $a -gt 1 ]; then 
        a=$(($a - 1))
        b=$(yes "../" | head -n $a | paste -s -d '')
        echo "$a $i $b"
        sed -i 's~href="/~href="'"$b"'~g' $i
    fi;
done
