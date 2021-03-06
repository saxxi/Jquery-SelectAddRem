(function( $ ){
    $.fn.SelectAddRem = function() {
        var self = this;
        var $select = $(this);
        
        self.all_options = $(self).find('option').attr('data-selectaddremvisibility', '1');
        
        
        self.add_option = function(option_obj){
            if (!self.option_exists(option_obj)) { return false; }

            $(option_obj).attr('data-selectaddremvisibility', '1');
            self.set_visibility(option_obj, '1');
            var options_to_show = $(self.all_options).filter("[data-selectaddremvisibility=1]");
            $select.html(options_to_show);
            
            self.reset_value();
        }
        
        
        self.rm_option = function(option_obj){    
            $(option_obj).each(function(){
                var option_index = self.option_index(this);
                if (!self.option_exists(this)) { return; }
                
                self.set_visibility($(self.all_options).eq(option_index), '0');
                $(this).remove();
            });
            
            self.reset_value();
        }
        
        
        self.reset_value = function(){
            $select.val($select.find('option:first').val());
        }
        
        
        self.option_index = function(option_obj) {
            return $(self.all_options).index(option_obj);
        }
        
        
        self.set_visibility = function(option_obj, visibility){
            $(option_obj).attr('data-selectaddremvisibility', visibility);
        }
        
        
        self.option_exists = function(option_obj){
            return (self.option_index(option_obj) > -1);
        }
        
        
        return self;
    };
})( jQuery );