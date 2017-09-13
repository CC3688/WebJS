function getByClass(oParent,sClass)
{
    var arr=[];
    var aEle=oParent.getElementsByTagName('*');
    var re=new RegExp('\\b'+sClass+'\\b');  
    for(var i=0;i<aEle.length;i++)
    {
        if(re.test(aEle[i].className)){
            arr.push(aEle[i]);
        }
    }
    return arr;
}
