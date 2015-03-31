(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(factory) {
    if ((typeof define === 'function') && define.amd) {
      return define(['simditor', 'marked'], factory);
    } else {
      return factory(window.Simditor, window.marked);
    }
  })(function(Simditor, _marked) {
    var MarkedButton;
    MarkedButton = (function(_super) {
      __extends(MarkedButton, _super);

      function MarkedButton() {
        MarkedButton.__super__.constructor.apply(this, arguments);
        this.marked = _marked;
        if (!_marked) {
          throw new Error('cannot find the plugin marked');
        }
      }

      MarkedButton.prototype._init = function() {
        if (this.editor.util.os.mac) {
          this.title = this.title + ' ( Cmd + m )';
        } else {
          this.title = this.title + ' ( Ctrl + m )';
          this.shortcut = 'ctrl+m';
        }
        MarkedButton.__super__._init.apply(this, arguments);
        return this.setIcon("maxcdn");
      };

      MarkedButton.prototype.name = 'marked';

      MarkedButton.prototype.title = 'marked';

      MarkedButton.prototype.icon = 'maxcdn';

      MarkedButton.prototype.shortcut = 'cmd+m';

      MarkedButton.prototype.setIcon = function(icon) {
        return this.el.find("span").removeClass().addClass("fa fa-" + icon);
      };

      MarkedButton.prototype.decodeHTML = function(str) {
        var div;
        div = document.createElement('div');
        div.innerHTML = str;
        return div.innerText || div.textContent;
      };

      MarkedButton.prototype.encodeHTML = function(str) {
        var div;
        div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
      };

      MarkedButton.prototype.decodeCodes = function(content) {
        var code, codes, div, text, _i, _len;
        div = document.createElement('div');
        div.innerHTML = content;
        codes = div.querySelectorAll('code');
        for (_i = 0, _len = codes.length; _i < _len; _i++) {
          code = codes[_i];
          text = this.decodeHTML(code.innerText || div.textContent);
          if (code.innerText) {
            code.innerText = text;
          }
          if (code.textContent) {
            code.textContent = text;
          }
        }
        return div.innerHTML;
      };

      MarkedButton.prototype.replaceSelection = function(html, selectInserted) {
        var child, div, firstInsertedNode, fragment, lastInsertedNode, range, sel;
        if (selectInserted == null) {
          selectInserted = true;
        }
        sel = window.getSelection();
        if (!(sel.getRangeAt && sel.rangeCount)) {
          return;
        }
        range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        if (range.createContextualFragment) {
          fragment = range.createContextualFragment(html);
        } else {
          div = document.createElement("div");
          div.innerHTML = html;
          fragment = document.createDocumentFragment();
          while ((child = div.firstChild)) {
            fragment.appendChild(child);
          }
        }
        firstInsertedNode = fragment.firstChild;
        lastInsertedNode = fragment.lastChild;
        range.insertNode(fragment);
        if (!selectInserted) {
          return;
        }
        if (firstInsertedNode) {
          range.setStartBefore(firstInsertedNode);
          range.setEndAfter(lastInsertedNode);
        }
        sel.removeAllRanges();
        return sel.addRange(range);
      };

      MarkedButton.prototype.doReplaceSelction = function(sel) {
        var value;
        value = this.marked(this.encodeHTML(sel));
        value = this.decodeCodes(value);
        return this.replaceSelection(value);
      };

      MarkedButton.prototype.doReplaceAll = function() {
        var value;
        value = this.editor.getValue();
        value = value.replace(/<p>/g, '').replace(/<\/p>/g, '\n');
        value = this.marked(value);
        value = this.decodeCodes(value);
        return this.editor.setValue(value);
      };

      MarkedButton.prototype.command = function() {
        var sel;
        sel = window.getSelection().toString();
        if (sel.length === 0) {
          this.doReplaceAll();
        } else {
          this.doReplaceSelction(sel);
        }
        return this.editor.selection.setRangeAtEndOf('p');
      };

      return MarkedButton;

    })(Simditor.Button);
    return Simditor.Toolbar.addButton(MarkedButton);
  });

}).call(this);
