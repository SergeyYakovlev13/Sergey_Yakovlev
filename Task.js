const prompt=require('prompt-sync')()
function filter_list(list)
{
    var c=list.map(v => ((typeof(v) ==='number' && Math.round(v)===v && v>=0 && v!=Infinity) || (typeof(v) ==='string')));
    var b=[list.length];
    for(i=0;i<list.length;i++)
    {
        b[i]=true;
    }
    var k=0;
    for(i=0;i<c.length;i++)
    {
        if(b[i]===c[i]) k++;
    }
    if (k===list.length) return list.filter(v => typeof(v)==='number');
    else console.log('List should consist of non-negative integers and strings.');
}
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));
console.log('\n')
function first_non_repeating_letter(string)
{
    var a=Array.from(string);
    var p;
    var r=0;
    for(i=0;i<a.length-1;i++)
    {
        var c=0;
        var s=0;
        for(j=i+1;j<a.length;j++)
        {
            if((a[i]===a[j].toUpperCase())||(a[i]===a[j].toLowerCase())) c++;  
        }
        if(c===0) 
        {
            for(k=i-1;k>=0;k--)
            {
                if(a[k]===a[i])
                {
                    s++;
                }
            }
            if(s===0)
            {
                p=a[i];
                i=a.length;
                r=0;
            }
            else
            {
                r++;
            }
        }
        else
        {
            r++;
        }
    }
    if(r!=0)
    {
        p='';
    }
    if(a.length<=1)
    {
        p=string;
    }
    return p;
}
console.log(first_non_repeating_letter('stress'));
console.log(first_non_repeating_letter('sTreSS'));
console.log(first_non_repeating_letter('sSS'));
console.log(first_non_repeating_letter('ababa'));
console.log(first_non_repeating_letter('aba'));
console.log(first_non_repeating_letter('a'));
console.log(first_non_repeating_letter(''));
console.log('\n');
function digital_root(n)
{
    var s=String(n);
    var a=Array.from(s);
    do{
        dr=0;
        for(i=0;i<a.length;i++)
        {
            dr=dr+Number(a[i]);
        }
        s=String(dr);
        a=Array.from(s);
    }while(dr>9)
    return dr;
}
console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));
console.log('\n');
function number_of_pairs(arr,target)
{
    var numb=0;
    for (i=0;i<arr.length-1;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            var count=0;
            if(arr[j]+arr[i]===target)
            {
                count++;
            }
            numb+=count;
        }
    }
    return numb;
}
console.log(number_of_pairs([1,3,6,2,2,0,4,5],5));
console.log('\n');
function upper_sort(s)
{
    s=s.toUpperCase();
    a=s.split(';')
    var t;
    for(i=0;i<a.length;i++)
    {
        a[i]=a[i].split(':')
        t=a[i][0];
        a[i][0]=a[i][1];
        a[i][1]=t;
    }
    a=a.sort();
    var s_='';
    for(i=0;i<a.length;i++)
    {
        s_+='('+a[i][0]+',';
        s_+=a[i][1]+')';
    }
    return s_;
}
console.log(upper_sort("Fred:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
console.log('\n');
function next_bigger(n)
{
    if(n<12)
    {
        return -1;
    }
    var s=String(n);
    var a=Array.from(s);
    var t;
    var a_=Array();
    for(i=0;i<a.length;i++)
    {
        a_[i]=Number(a[i]);
    }
    var c=0;
    for(i=a_.length-1;i>0;i--)
    {
        if(a_[i]>a_[i-1])
        {
            t=a_[i];
            a_[i]=a_[i-1];
            a_[i-1]=t;
            c++;
            if(a_[i+1]>a_[i])
            {
                t=a_[i-1];
                a_[i-1]=a_[i+1];
                a_[i+1]=t;
            }
            for(j=i;j<a_.length-1;j++)
            {
                if(a_[j+1]<a_[j])
                {
                    t=a_[j];
                    a_[j]=a_[j+1];
                    a_[j+1]=t;
                }
            }
            i=-1;
        }
    }
    if(c===0)
    {
        return -1;
    }
    else
    {
        var nb='';
        for(i=0;i<a_.length;i++)
        {
            nb+=a_[i];
        }
        nb=Number(nb);
        return nb;
    }
}
console.log(next_bigger(12))
console.log(next_bigger(513))
console.log(next_bigger(2017))
console.log(next_bigger(9))
console.log(next_bigger(111))
console.log(next_bigger(531))
console.log('\n')
function numb_to_IP(n)
{
    s=n.toString(2);
    a=Array.from(s);
    var s1='',s2='',s3='',s4='',s='';
    if(a.length<8)
    {
        s='0.0.0.'+n;
        return s;
    }
    if((a.length>=8)&&(a.length<16))
    {
        for(i=a.length-8;i<a.length;i++)
        {
            s1+=a[i];
        }
        for(i=0;i<a.length-8;i++)
        {
            s2+=a[i];
        }
        s1=parseInt(s1,2);
        s2=parseInt(s2,2);
        s+='0.0.'+s2+'.'+s1;
        return s;
    }
    if((a.length>=16)&&(a.length<24))
    {
        for(i=a.length-8;i<a.length;i++)
        {
            s1+=a[i];
        }
        for(i=a.length-16;i<a.length-8;i++)
        {
            s2+=a[i];
        }
        for(i=0;i<a.length-16;i++)
        {
            s3+=a[i];
        }
        s1=parseInt(s1,2);
        s2=parseInt(s2,2);
        s3=parseInt(s3,2);
        s+='0.'+s3+'.'+s2+'.'+s1;
        return s;
    }
    if((a.length>=24)&&(a.length<=32))
    {
        for(i=a.length-8;i<a.length;i++)
        {
            s1+=a[i];
        }
        for(i=a.length-16;i<a.length-8;i++)
        {
            s2+=a[i];
        }
        for(i=a.length-24;i<a.length-16;i++)
        {
            s3+=a[i];
        }
        for(i=0;i<a.length-24;i++)
        {
            s4+=a[i];
        }
        s1=parseInt(s1,2);
        s2=parseInt(s2,2);
        s3=parseInt(s3,2);
        s4=parseInt(s4,2);
        s+=s4+'.'+s3+'.'+s2+'.'+s1;
        return s;
    }
    if(a.length>32)
    {
        console.log('This is not 32 bit number.');
    }
}
console.log(numb_to_IP(2149583361))
console.log(numb_to_IP(32))
console.log(numb_to_IP(0))
