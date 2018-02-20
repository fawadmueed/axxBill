
$(document).ready(function(){

      $(document.body).on('keydown', "#factTableBody td[data-target='Frais'],#factTableBody_regie td[data-target='Frais'], #factTableBody_planTrait td[data-target='Frais'],#factTableBody td[data-target='Honoraires'],#factTableBody_regie td[data-target='Honoraires'], #factTableBody_planTrait td[data-target='Honoraires'],#factTableBody td[data-target='Total'],#factTableBody_regie td[data-target='Total', #factTableBody_planTrait td[data-target='Total']", function(e){
      	
  	   check_charcount(this,6, e);		
      })

      $(document.body).on('keydown', "#factTableBody td[data-target='Prod'],#factTableBody_regie td[data-target='Prod'], #factTableBody_planTrait td[data-target='Prod']", function(e){
        
       check_charcount(this,0,e,'alphaNumeric');    
      })
    
  	   function check_charcount(content_id, max, e,valid_type)
      {   
    
  		    // Allow: backspace, delete, tab, escape, enter and .
              if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                  // Allow: Ctrl+A, Command+A
                  (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
                  // Allow: home, end, left, right, down, up
                  (e.keyCode >= 35 && e.keyCode <= 40)) {
                      // let it happen, don't do anything
                      return;
              }
            
              if(valid_type=='numbers')
              {
                  // Ensure that it is a number and stop the keypress
                    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) 
                    {
                        e.preventDefault();
                    }
                    else
                    {
                 
        
                    // Restrict Max length to 6 1000.00
                    if(e.which != 8 && $(content_id).text().length > max)
                    {
                      // $('#'+content_id).text($('#'+content_id).text().substring(0, max));
                       
                      if(e.which==9 || e.which==46)
                      {
              
                      }
                      else
                      {
           		           e.preventDefault();
       		           }
    
                    }
                  }
              }

              if(valid_type=='alphaNumeric')
              {
                if (!((e.keyCode == 8) || (e.keyCode == 32) || (e.keyCode == 46) || (e.keyCode >= 35 && e.keyCode <= 40) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))) 
                    {
                        e.preventDefault();
                    }
                    else
                    {
                 
        
                    // Restrict Max length to 6 1000.00
                    if(e.which != 8 && $(content_id).text().length > max)
                    {
                      // $('#'+content_id).text($('#'+content_id).text().substring(0, max));
                       
                      if(e.which==9 || e.which==46)
                      {
              
                      }
                      else
                      {
                         e.preventDefault();
                     }
    
                    }
                  }
              }
    }

})