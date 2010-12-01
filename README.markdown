SelectAddRem
======

Collects all dropdown menu and permits adding and removing options by their value.
As other css methods were not working for hiding select options we tried through js.

In specific:

* found "select > option display:none" buggy on IE
* "select > option visibility:hidden" was leaving height issue


Usage
-------------

### Initialize

	var selectaddrem;
	selectaddrem = new SelectAddRem('select');
	
	or
	
	selectaddrem = new SelectAddRem('select .onlythese'); // jquery notation

### Usage

	selectaddrem.rem('my_select_id', 'value_1');
	selectaddrem.add('my_select_id', 'value_1');


Author
------

Adit Saxena 2010 :: GH fresh
