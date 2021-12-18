XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let reporters = require('jasmine-reporters');
class API_test
{
    Upload()
    {
        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function() 
        {
          if(this.readyState === 4) 
          {
            console.log(this.responseText);
            }
        });
        xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
        xhr.setRequestHeader("Dropbox-API-Arg", " {\"path\": \"/test.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}");
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.setRequestHeader("Authorization", "Bearer to_lI8t8zvgAAAAAAAAAAQPIUbanadJzVClO9IH0enZMCnAOLzkncn2yPEyMokuV");
        xhr.send();
    }
    GetFileMetadata()
    {
      let data = JSON.stringify(
        {
        "file": "/test.txt",
        "actions": []
        });

      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function() 
      {
        if(this.readyState === 4) 
        {
          console.log(this.responseText);
        }
      });
      xhr.open("POST", "https://content.dropboxapi.com/2/sharing/get_file_metadata");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer to_lI8t8zvgAAAAAAAAAAQPIUbanadJzVClO9IH0enZMCnAOLzkncn2yPEyMokuV");
      xhr.send(data);
    }
    Delete_file()
    {
      let data = JSON.stringify(
        {
          "path": "/test.txt"
        });
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function() 
      {
        if(this.readyState === 4) 
        {
          console.log(this.responseText);
        }
      });
      xhr.open("POST", "https://content.dropboxapi.com/2/files/delete_v2");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer to_lI8t8zvgAAAAAAAAAAQPIUbanadJzVClO9IH0enZMCnAOLzkncn2yPEyMokuV");
      xhr.send(data);
    }
}
Test=new API_test();
setTimeout(Test.Upload,1000);
setTimeout(function(){console.log('\n')},2000);
setTimeout(Test.Delete_file,3000);
setTimeout(function(){console.log('\n')},4000);
setTimeout(Test.GetFileMetadata,5000);
setTimeout(function(){console.log('\n')},6000);
setTimeout(Test.Upload,7000);
setTimeout(Test.GetFileMetadata,8000);
setTimeout(function(){console.log('\n')},9000);
setTimeout(function(){console.log('\n')},10000);
setTimeout(Test.Delete_file,11000);
setTimeout(function(){console.log('\n')},12000);