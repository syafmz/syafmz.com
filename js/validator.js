/*!
 * Validator v0.11.5 for Bootstrap 3, by @1000hz
 * Copyright 2016 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */
+function(e){function b(f){return f.is('[type="checkbox"]')?f.prop("checked"):f.is('[type="radio"]')?!!e('[name="'+f.attr("name")+'"]:checked').length:f.val()}var c=function(g,f){this.options=f;this.validators=e.extend({},c.VALIDATORS,f.custom);this.$element=e(g);this.$btn=e('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));this.update();this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",e.proxy(this.onInput,this));this.$element.on("submit.bs.validator",e.proxy(this.onSubmit,this));this.$element.on("reset.bs.validator",e.proxy(this.reset,this));this.$element.find("[data-match]").each(function(){var i=e(this);var h=i.data("match");e(h).on("input.bs.validator",function(j){b(i)&&i.trigger("input.bs.validator")})});this.$inputs.filter(function(){return b(e(this))}).trigger("focusout");this.$element.attr("novalidate",true);this.toggleSubmit()};c.VERSION="0.11.5";c.INPUT_SELECTOR=':input:not([type="hidden"], [type="submit"], [type="reset"], button)';c.FOCUS_OFFSET=20;c.DEFAULTS={delay:500,html:false,disable:true,focus:true,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}};c.VALIDATORS={"native":function(f){var g=f[0];if(g.checkValidity){return !g.checkValidity()&&!g.validity.valid&&(g.validationMessage||"error!")}},match:function(f){var g=f.data("match");return f.val()!==e(g).val()&&c.DEFAULTS.errors.match},minlength:function(f){var g=f.data("minlength");return f.val().length<g&&c.DEFAULTS.errors.minlength}};c.prototype.update=function(){this.$inputs=this.$element.find(c.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]'));return this};c.prototype.onInput=function(i){var g=this;var h=e(i.target);var f=i.type!=="focusout";if(!this.$inputs.is(h)){return}this.validateInput(h,f).done(function(){g.toggleSubmit()})};c.prototype.validateInput=function(h,f){var i=b(h);var k=h.data("bs.validator.errors");var l;if(h.is('[type="radio"]')){h=this.$element.find('input[name="'+h.attr("name")+'"]')}var j=e.Event("validate.bs.validator",{relatedTarget:h[0]});this.$element.trigger(j);if(j.isDefaultPrevented()){return}var g=this;return this.runValidators(h).done(function(m){h.data("bs.validator.errors",m);m.length?f?g.defer(h,g.showErrors):g.showErrors(h):g.clearErrors(h);if(!k||m.toString()!==k.toString()){j=m.length?e.Event("invalid.bs.validator",{relatedTarget:h[0],detail:m}):e.Event("valid.bs.validator",{relatedTarget:h[0],detail:k});g.$element.trigger(j)}g.toggleSubmit();g.$element.trigger(e.Event("validated.bs.validator",{relatedTarget:h[0]}))})};c.prototype.runValidators=function(j){var l=[];var g=e.Deferred();j.data("bs.validator.deferred")&&j.data("bs.validator.deferred").reject();j.data("bs.validator.deferred",g);function i(m){return j.data(m+"-error")}function k(){var m=j[0].validity;return m.typeMismatch?j.data("type-error"):m.patternMismatch?j.data("pattern-error"):m.stepMismatch?j.data("step-error"):m.rangeOverflow?j.data("max-error"):m.rangeUnderflow?j.data("min-error"):m.valueMissing?j.data("required-error"):null}function f(){return j.data("error")}function h(m){return i(m)||k()||f()}e.each(this.validators,e.proxy(function(o,n){var m=null;if((b(j)||j.attr("required"))&&(j.data(o)||o=="native")&&(m=n.call(this,j))){m=h(o)||m;!~l.indexOf(m)&&l.push(m)}},this));if(!l.length&&b(j)&&j.data("remote")){this.defer(j,function(){var m={};m[j.attr("name")]=b(j);e.get(j.data("remote"),m).fail(function(o,p,n){l.push(h("remote")||n)}).always(function(){g.resolve(l)})})}else{g.resolve(l)}return g.promise()};c.prototype.validate=function(){var f=this;e.when(this.$inputs.map(function(g){return f.validateInput(e(this),false)})).then(function(){f.toggleSubmit();f.focusError()});return this};c.prototype.focusError=function(){if(!this.options.focus){return}var f=this.$element.find(".has-error:first :input");if(f.length===0){return}e("html, body").animate({scrollTop:f.offset().top-c.FOCUS_OFFSET},250);f.focus()};c.prototype.showErrors=function(f){var k=this.options.html?"html":"text";var j=f.data("bs.validator.errors");var g=f.closest(".form-group");var h=g.find(".help-block.with-errors");var i=g.find(".form-control-feedback");if(!j.length){return}h.data("bs.validator.originalContent")===undefined&&h.data("bs.validator.originalContent",h.html());h.empty().append(j);g.addClass("has-error has-danger");g.hasClass("has-feedback")&&i.removeClass(this.options.feedback.success)&&i.addClass(this.options.feedback.error)&&g.removeClass("has-success")};c.prototype.clearErrors=function(f){var g=f.closest(".form-group");var h=g.find(".help-block.with-errors");var i=g.find(".form-control-feedback");h.html(h.data("bs.validator.originalContent"));g.removeClass("has-error has-danger has-success");g.hasClass("has-feedback")&&i.removeClass(this.options.feedback.error)&&i.removeClass(this.options.feedback.success)&&b(f)&&i.addClass(this.options.feedback.success)&&g.addClass("has-success")};c.prototype.hasErrors=function(){function f(){return !!(e(this).data("bs.validator.errors")||[]).length}return !!this.$inputs.filter(f).length};c.prototype.isIncomplete=function(){function f(){var g=b(e(this));return !(typeof g=="string"?e.trim(g):g)}return !!this.$inputs.filter("[required]").filter(f).length};c.prototype.onSubmit=function(f){this.validate();if(this.isIncomplete()||this.hasErrors()){f.preventDefault()}};c.prototype.toggleSubmit=function(){if(!this.options.disable){return}this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors())};c.prototype.defer=function(f,g){g=e.proxy(g,this,f);if(!this.options.delay){return g()}window.clearTimeout(f.data("bs.validator.timeout"));f.data("bs.validator.timeout",window.setTimeout(g,this.options.delay))};c.prototype.reset=function(){this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success);this.$inputs.removeData(["bs.validator.errors","bs.validator.deferred"]).each(function(){var g=e(this);var f=g.data("bs.validator.timeout");window.clearTimeout(f)&&g.removeData("bs.validator.timeout")});this.$element.find(".help-block.with-errors").each(function(){var g=e(this);var f=g.data("bs.validator.originalContent");g.removeData("bs.validator.originalContent").html(f)});this.$btn.removeClass("disabled");this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success");return this};c.prototype.destroy=function(){this.reset();this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator");this.$inputs.off(".bs.validator");this.options=null;this.validators=null;this.$element=null;this.$btn=null;return this};function d(f){return this.each(function(){var i=e(this);var g=e.extend({},c.DEFAULTS,i.data(),typeof f=="object"&&f);var h=i.data("bs.validator");if(!h&&f=="destroy"){return}if(!h){i.data("bs.validator",(h=new c(this,g)))}if(typeof f=="string"){h[f]()}})}var a=e.fn.validator;e.fn.validator=d;e.fn.validator.Constructor=c;e.fn.validator.noConflict=function(){e.fn.validator=a;return this};e(window).on("load",function(){e('form[data-toggle="validator"]').each(function(){var f=e(this);d.call(f,f.data())})})}(jQuery);

