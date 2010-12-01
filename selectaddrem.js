function SelectAddRem(jsel){
	var self = this;
	this.allSelects_dom = $(jsel);
	this.allSelects = {};
	
	// add func
	self.add = function(curSelId, curOptKey){
		var curSel = $('#'+curSelId);
		var curSelOpts = $('#'+curSelId+" option[value='"+curOptKey+"']");
		
		if(curSelOpts.length < 1){ // add only if doesn't exist
			var curOpts = curSel.children().map(function() {return $(this).val();}).get();
			var htmlopts = '';
			
			for(iOpt in this.allSelects[curSelId]){
				opt = this.allSelects[curSelId][iOpt];
				// if iOpt still exist in array or we're adding it:
				if($.inArray(opt.key,curOpts) != -1 || opt.key == curOptKey){
					htmlopts += '<option value="'+opt.key+'">'+opt.val+'</option>';
				}
			}
			curSel.html(htmlopts);
		}
	}
	
	// rem func
	self.rem = function(curSelId, curOptKey){
		$("#"+curSelId+" option[value='"+curOptKey+"']").remove();
	}
	
	// collect func
	for(isel = 0; isel<this.allSelects_dom.length; isel++){
		var curSel = $(this.allSelects_dom[isel]);
		var curSelId = curSel.attr('id');
		
		if(curSelId != ''){ // collect select's only if id exist
			this.allSelects[curSelId] = [];
			curSel.find('option').each(function(iopt){
				curOpt = $(this);
				self.allSelects[curSelId][iopt] = {
					key: curOpt.val(),
					val: curOpt.text()
				};
			});
			
		}
	}
}