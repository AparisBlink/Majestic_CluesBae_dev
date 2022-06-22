(function (blink) {
	'use strict';

	var Majestic_CluesBae_devStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	Majestic_CluesBae_devStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_Majestic_CluesBae_dev',
		ckEditorStyles: {
			name: 'Majestic_CluesBae_dev',
			styles: [

				{ name: ' Título 01', element: 'h3', attributes: { 'class': 'bck-title-1'} },
				{ name: ' Título 02', element: 'h3', attributes: { 'class': 'bck-title-2'} },
				{ name: ' Título 03', element: 'h3', attributes: { 'class': 'bck-title-3'} },
				{ name: ' Título 04', element: 'h3', attributes: { 'class': 'bck-title-4'} },
				{ name: ' Título 05', element: 'h3', attributes: { 'class': 'bck-title-5'} },
				{ name: ' Título 06', element: 'h3', attributes: { 'class': 'bck-title-6'} },
				{ name: ' Título 07', element: 'h3', attributes: { 'class': 'bck-title-7'} },
				{ name: ' Título 08', element: 'h3', attributes: { 'class': 'bck-title-8'} },
				{ name: ' Título 09', element: 'h3', attributes: { 'class': 'bck-title-9'} },
				{ name: ' Título 10', element: 'h3', attributes: { 'class': 'bck-title-10'} },



				{ name: 'E.01 Azul', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'E.02 Sub Azul', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'E.03 Color ppal', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'E.04 Subrayado', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'E.05 Manuscrito', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
				{ name: 'E.06 Serif', element: 'span', attributes: { 'class': 'bck-enfasis-6'} },
				{ name: 'E.07 Personaje Audio', element: 'span', attributes: { 'class': 'bck-enfasis-7'} },
				

				{ name: 'Pa.01 Enunciados', element: 'p', attributes: { 'class': 'bck-p-1'} },


				{ name: 'Lista ordenada 01', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-1' } },
				{ name: 'Lista ordenada 02', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-2' } },
				{ name: 'Lista ordenada 03', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-3' } },
				{ name: 'Lista ordenada 04', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-4' } },
				{ name: 'Lista ordenada 05', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-5' } },
				{ name: 'Lista ordenada 06', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-6' } },
				{ name: 'Lista ordenada 07', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-7' } },
				{ name: 'Lista ordenada 08', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-8' } },
				{ name: 'Lista ordenada 09', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-9' } },
				{ name: 'Lista ordenada 10', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-10' } },
				{ name: 'Lista ordenada 11', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-11' } },
				{ name: 'Lista ordenada 12', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-12' } },
				{ name: 'Lista ordenada 13', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-13' } },
				{ name: 'Lista ordenada 14', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-14' } },
				{ name: 'Lista ordenada 15', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-15' } },

				{ name: 'Lista desordenada 01', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-1' } },
				{ name: 'Lista desordenada 02', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-2' } },
				{ name: 'Lista desordenada 03', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-3' } },
				{ name: 'Lista desordenada 04', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-4' } },


				{ name: 'Caja 01', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-1' } },
				{ name: 'Caja 02', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-2' } },
				{ name: 'Caja 03', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-3' } },
				{ name: 'Caja 04', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-4' } },
				{ name: 'Caja 05', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-5' } },
				{ name: 'Caja 06', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-6' } },
				{ name: 'Caja 07', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-7' } },
				{ name: 'Caja 08', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-8' } },
				{ name: 'Caja 09', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-9' } },
				{ name: 'Caja 10', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-10' } },
				{ name: 'Caja 11', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-11' } },
				{ name: 'Caja 12', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-12' } },
				{ name: 'Caja 13', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-13' } },
				{ name: 'Caja 14', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-14' } },
				{ name: 'Caja 15', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-15' } },
				{ name: 'Caja 16', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-16' } },
				{ name: 'Caja 17', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-17' } },
				{ name: 'Caja 18', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-18' } },
				{ name: 'Caja 19', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-19' } },
				{ name: 'Caja 20', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-20' } },
				{ name: 'Caja 21', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-21' } },
				{ name: 'Caja 22', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-22' } },
				{ name: 'Caja 23', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-23' } },
				{ name: 'Caja 24', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-24' } },
				{ name: 'Caja 25', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-25' } },
				{ name: 'Caja 26', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-26' } },


				{ name: 'Tabla 01', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-1'} },
				{ name: 'Table 02 Trans', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table bck-table-2'} },

				{ name: 'Celda 01', element: 'td', attributes: { 'class': 'bck-td bck-td-1'} },
				{ name: 'Celda 02', element: 'td', attributes: { 'class': 'bck-td bck-td-2'} },

				{ name: 'Icono Collaboration', element: 'span', attributes: { 'class': 'icon icon_collaboration' } },
				{ name: 'Icono Communication', element: 'span', attributes: { 'class': 'icon icon_communication' } },
				{ name: 'Icono Creativity', element: 'span', attributes: { 'class': 'icon icon_creativity' } },
				{ name: 'Icono Critical Thinking', element: 'span', attributes: { 'class': 'icon icon_critical-thinking' } },
				{ name: 'Icono Flexibility', element: 'span', attributes: { 'class': 'icon icon_flexibility' } },
				{ name: 'Icono Initiative', element: 'span', attributes: { 'class': 'icon icon_initiative' } },
				{ name: 'Icono Leadership', element: 'span', attributes: { 'class': 'icon icon_leadership' } },
				{ name: 'Icono Literacy', element: 'span', attributes: { 'class': 'icon icon_literacy' } },
				{ name: 'Icono Parejas', element: 'span', attributes: { 'class': 'icon icon_parejas' } },
				{ name: 'Icono Productivity', element: 'span', attributes: { 'class': 'icon icon_productivity' } },
				{ name: 'Icono Social', element: 'span', attributes: { 'class': 'icon icon_social' } },
				{ name: 'Icono Team', element: 'span', attributes: { 'class': 'icon icon_team' } },
			]
		},

		init: function (scope) {
			var that = scope || this;
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.init.call(that);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.removeFinalSlide();
			that.handleScrollEnd();
			that.setTooltip();
			window.editar && that.configEditor();

			if ($('.navbar-bottom').length > 0) {
 				$('.navbar-bottom ol').wrapAll('<div id="bottom-navigator"></div>');
		 		var width = 0;
		 		$('.navbar-bottom li').each(function(i, elem){ width += $(elem).outerWidth(true); });
		 		$('.navbar-bottom ol').css('width', width * 1.1);
		 		var scroll = new IScroll('#bottom-navigator', {
		 			scrollX: true,
		 			scrollY: false,
		 			eventPassthrough: true
		 		});
		 		scroll.on('scrollEnd', that.handleScrollEnd);
		 		that.handleScrollEnd.call(scroll);
	 		}

		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},


		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html().trim() + ' > ' + blink.courseInfo.unit;
			});
		},

		handleScrollEnd: function () {
 			$('#bottom-navigator')
 				.removeClass('show_left')
 				.removeClass('show_right');

 			if (this.x < 0) {
 				$('#bottom-navigator').addClass('show_left');
 			}
 			if (this.x > this.maxScrollX) {
 				$('#bottom-navigator').addClass('show_right');
 			}

 		},

		setTooltip: function () {},

		//BK-15873 Quitamos la funcion getEditorStyles para que la herede de basic
	};

	Majestic_CluesBae_devStyle.prototype = _.extend({}, new blink.theme.styles.basic(), Majestic_CluesBae_devStyle.prototype);

	blink.theme.styles.Majestic_CluesBae_dev = Majestic_CluesBae_devStyle;

})( blink );

