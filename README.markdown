SelectAddRem (jQuery plugin)
======

Cross-browser solution to hide / show options in a select.

In specific:
* found "select > option display:none" not supported in IE, Safari, Chrome
* "select > option visibility:hidden" was leaving height issue


Usage
-------------

### Initialize

	var $myselect = $('#myselect').SelectAddRem();

### Usage

	// hide option
	$myselect.rm_option($myselect.find('option:first'));
	
	// show hidden option
	$myselect.add_option($myselect.rm_option($myselect.find('option:first')));
	
	// get visible options
    $myselect.find('option');
    
    // get all options (visible + invisible)
    $myselect.all_options;
    
    option visibility is set by data attribute "data-selectaddremvisibility", which takes values "0" (invisible) or "1" (visible).

Author
------

Adit Saxena 2010 :: GH fresh
