/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function(){
 $('#tasklist').dataTable({
     "aoColumns": [
                null,
                null,
                null,
                { "sType": "uniDate" }
            ]
 });
    
});

