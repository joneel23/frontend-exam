/**
 * Created by Joneel on 5/12/2018.
 */

jQuery(document).ready(function($){

    console.log("test");
    //default data
    var options = {
        data: [ {location: "Noweheresville, XX", zipcode: "00000"},
           ],
        getValue: "location",
        template: {
            type: "description",
            fields: {
                description: "zipcode"
            }
        }
    };

    $("#searchZipcode").easyAutocomplete(options);

    //select category

    $("#category").on('change', function(){
       var cat_val = $(this).val();
       console.log(cat_val);
       $('#myModal').modal('show');
    });

});