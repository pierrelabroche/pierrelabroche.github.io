const btnAdd = document.querySelector('#btnAdd');
const btnAdd2 = document.querySelector('#btnAdd2');
const btnRemove = document.querySelector('#btnRemove');
const btnRemove2 = document.querySelector('#btnRemove2');
const listbox = document.querySelector('#list');
const listbox2 = document.querySelector('#list2');

const framework = document.querySelector('#framework');
const framework2 = document.querySelector('#framework2');
const class_ = document.querySelector('#class');
const major = document.querySelector('#major');
const elective = document.querySelector('#elective');
const calc = document.querySelector('#calc');

const gen_elecs = ['CS108', 'CS112', 'CS112E', 'CS124', 'CS131', 'CS140', 'CS140E', 'CS212', 'CS142', 'CS143', 'CS144', 'CS145',
     'CS146', 'CS147', 'CS148', 'CS149', 'CS151', 'CS154', 'CS155', 'CS157', 'PHIL151', 'CS163', 'CS166', 'CS168',
     'CS173', 'CS190', 'CS195', 'CS197', 'CS205L', 'CS206', 'CS210A', 'CS217', 'CS221', 'CS223A', 'CS224N', 'CS224R',
     'CS224S', 'CS224S', 'CS224U', 'CS224V', 'CS224W', 'CS225A', 'CS227B', 'CS228', 'CS229', 'CS229M', 'CS229T',
     'CS230', 'CS231A', 'CS231C', 'CS231N', 'CS232', 'CS233', 'CS234', 'CS235', 'CS237A', 'CS237B', 'CS238', 'CS240',
     'CS240LX', 'CS242', 'CS243', 'CS244', 'CS244B', 'CS245', 'CS246', 'CS247', 'CS248', 'CS250', 'CS251', 'CS252',
     'CS254', 'CS254B', 'CS255', 'CS256', 'CS257', 'CS259Q', 'CS261', 'CS263', 'CS265', 'CS269I', 'CS269O', 'CS269Q', 'CS270', 'CS271', 'CS272', 'CS273A', 'CS273B', 'CS274', 'CS275', 'CS276', 'CS278', 'CS279', 'CS281',
     'CS330', 'CS333', 'CS334A', 'CS336', 'CS342', 'CS348', 'CS351', 'CS352', 'CS361', 'CS369L', 'CS398', 'CS448B',
     'CME108', 'EE180', 'EE267', 'EE282', 'EE374', 'MS&E234']
console.log(gen_elecs)
window.onload = function() {
  var y = document.querySelectorAll('.gen_elecs'); 
  var ty = 0
  
  for (var x in y) {
    for(var z in gen_elecs) {
      let option = document.createElement("option");
      option.text = gen_elecs[z]
      y[x].add(option)
      console.log("check ", ty)
      console.log(x)
      console.log(y[x])
      ty += 1
    }
  }
};

btnAdd.onclick = (e) => {
  e.preventDefault();

  // validate the option
  if (framework.value == '') {
    alert('Please enter the name.');
    return;
  }
  // create a new option
  const option = new Option(framework.value, framework.value);
  // add it to the list
  listbox.add(option, undefined);

  // reset the value of the input
  framework.value = '';
  framework.focus();

};

// remove selected option
btnRemove.onclick = (e) => {
  e.preventDefault();

  // save the selected options
  let selected = [];

  for (let i = 0; i < listbox.options.length; i++) {
    selected[i] = listbox.options[i].selected;
  }

  // remove all selected option
  let index = listbox.options.length;
  while (index--) {
    if (selected[index]) {
      listbox.remove(index);
    }
  }
};

btnAdd2.onclick = (e) => {
	e.preventDefault();
  
	// validate the option
	if (framework2.value == '') {
	  alert('Please enter the name.');
	  return;
	}
	// create a new option
	const option = new Option(framework2.value, framework2.value);
	// add it to the list
	listbox2.add(option, undefined);
  
	// reset the value of the input
	framework2.value = '';
	framework2.focus();
  };
  
  // remove selected option
btnRemove2.onclick = (e) => {
	e.preventDefault();
  
	// save the selected options
	let selected = [];
  
	for (let i = 0; i < listbox2.options.length; i++) {
	  selected[i] = listbox2.options[i].selected;
	}
  
	// remove all selected option
	let index = listbox2.options.length;
	while (index--) {
	  if (selected[index]) {
		listbox2.remove(index);
	  }
	}
  };

const N_SAMPLES = 100000

var probref;

function p_cs108(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.3;
  }

  if (classman === 1 && major === 0) {
    return 0.46;
  }

  if (classman === 0 && major === 1) {
    return 0.54;
  }

  if (classman === 0 && major === 0) {
    return 0.73;
  }
}

function p_cs112(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.32;
  }

  if (classman === 1 && major === 0) {
    return 0.36;
  }

  if (classman === 0 && major === 1) {
    return 0.75;
  }

  if (classman === 0 && major === 0) {
    return 0.04;
  }
}

function p_cs112e(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.86;
  }

  if (classman === 1 && major === 0) {
    return 0.04;
  }

  if (classman === 0 && major === 1) {
    return 0.98;
  }

  if (classman === 0 && major === 0) {
    return 0.2;
  }
}

function p_cs124(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.7;
  }

  if (classman === 1 && major === 0) {
    return 0.69;
  }

  if (classman === 0 && major === 1) {
    return 0.05;
  }

  if (classman === 0 && major === 0) {
    return 0.82;
  }
}

function p_cs131(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.18;
  }

  if (classman === 1 && major === 0) {
    return 0.44;
  }

  if (classman === 0 && major === 1) {
    return 0.25;
  }

  if (classman === 0 && major === 0) {
    return 0.39;
  }
}

function p_cs140(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.85;
  }

  if (classman === 1 && major === 0) {
    return 0.78;
  }

  if (classman === 0 && major === 1) {
    return 0.74;
  }

  if (classman === 0 && major === 0) {
    return 0.14;
  }
}

function p_cs140e(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.86;
  }

  if (classman === 1 && major === 0) {
    return 0.56;
  }

  if (classman === 0 && major === 1) {
    return 0.59;
  }

  if (classman === 0 && major === 0) {
    return 0.06;
  }
}

function p_cs212(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.31;
  }

  if (classman === 1 && major === 0) {
    return 0.25;
  }

  if (classman === 0 && major === 1) {
    return 0.56;
  }

  if (classman === 0 && major === 0) {
    return 0.49;
  }
}

function p_cs142(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.22;
  }

  if (classman === 1 && major === 0) {
    return 0.14;
  }

  if (classman === 0 && major === 1) {
    return 0.38;
  }

  if (classman === 0 && major === 0) {
    return 0.98;
  }
}

function p_cs143(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.82;
  }

  if (classman === 1 && major === 0) {
    return 0.46;
  }

  if (classman === 0 && major === 1) {
    return 0.11;
  }

  if (classman === 0 && major === 0) {
    return 0.9;
  }
}

function p_cs144(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.62;
  }

  if (classman === 1 && major === 0) {
    return 0.67;
  }

  if (classman === 0 && major === 1) {
    return 0.55;
  }

  if (classman === 0 && major === 0) {
    return 0.99;
  }
}

function p_cs145(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.74;
  }

  if (classman === 1 && major === 0) {
    return 0.43;
  }

  if (classman === 0 && major === 1) {
    return 0.59;
  }

  if (classman === 0 && major === 0) {
    return 0.77;
  }
}

function p_cs146(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.28;
  }

  if (classman === 1 && major === 0) {
    return 0.42;
  }

  if (classman === 0 && major === 1) {
    return 0.2;
  }

  if (classman === 0 && major === 0) {
    return 0.76;
  }
}

function p_cs147(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.95;
  }

  if (classman === 1 && major === 0) {
    return 0.84;
  }

  if (classman === 0 && major === 1) {
    return 0.26;
  }

  if (classman === 0 && major === 0) {
    return 0.17;
  }
}

function p_cs148(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.72;
  }

  if (classman === 1 && major === 0) {
    return 0.34;
  }

  if (classman === 0 && major === 1) {
    return 0.87;
  }

  if (classman === 0 && major === 0) {
    return 0.42;
  }
}

function p_cs149(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.19;
  }

  if (classman === 1 && major === 0) {
    return 0.07;
  }

  if (classman === 0 && major === 1) {
    return 0.03;
  }

  if (classman === 0 && major === 0) {
    return 0.96;
  }
}

function p_cs151(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.4;
  }

  if (classman === 1 && major === 0) {
    return 0.55;
  }

  if (classman === 0 && major === 1) {
    return 0.85;
  }

  if (classman === 0 && major === 0) {
    return 0.67;
  }
}

function p_cs154(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.44;
  }

  if (classman === 1 && major === 0) {
    return 0.34;
  }

  if (classman === 0 && major === 1) {
    return 0.89;
  }

  if (classman === 0 && major === 0) {
    return 0.12;
  }
}

function p_cs155(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.81;
  }

  if (classman === 1 && major === 0) {
    return 0.89;
  }

  if (classman === 0 && major === 1) {
    return 0.52;
  }

  if (classman === 0 && major === 0) {
    return 0.72;
  }
}

function p_cs157(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.78;
  }

  if (classman === 1 && major === 0) {
    return 0.66;
  }

  if (classman === 0 && major === 1) {
    return 0.25;
  }

  if (classman === 0 && major === 0) {
    return 0.67;
  }
}

function p_phil151(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.99;
  }

  if (classman === 1 && major === 0) {
    return 0.72;
  }

  if (classman === 0 && major === 1) {
    return 0.8;
  }

  if (classman === 0 && major === 0) {
    return 0.62;
  }
}

function p_cs163(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.9;
  }

  if (classman === 1 && major === 0) {
    return 0.01;
  }

  if (classman === 0 && major === 1) {
    return 0.45;
  }

  if (classman === 0 && major === 0) {
    return 0.66;
  }
}

function p_cs166(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.14;
  }

  if (classman === 1 && major === 0) {
    return 0.44;
  }

  if (classman === 0 && major === 1) {
    return 0.4;
  }

  if (classman === 0 && major === 0) {
    return 0.7;
  }
}

function p_cs168(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.02;
  }

  if (classman === 1 && major === 0) {
    return 0.21;
  }

  if (classman === 0 && major === 1) {
    return 0.7;
  }

  if (classman === 0 && major === 0) {
    return 0.84;
  }
}

function p_cs173(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.84;
  }

  if (classman === 1 && major === 0) {
    return 0.4;
  }

  if (classman === 0 && major === 1) {
    return 0.96;
  }

  if (classman === 0 && major === 0) {
    return 0.57;
  }
}

function p_cs190(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.02;
  }

  if (classman === 1 && major === 0) {
    return 0.18;
  }

  if (classman === 0 && major === 1) {
    return 0.92;
  }

  if (classman === 0 && major === 0) {
    return 0.75;
  }
}

function p_cs195(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.15;
  }

  if (classman === 1 && major === 0) {
    return 0.34;
  }

  if (classman === 0 && major === 1) {
    return 0.45;
  }

  if (classman === 0 && major === 0) {
    return 0.27;
  }
}

function p_cs197(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.94;
  }

  if (classman === 1 && major === 0) {
    return 0.24;
  }

  if (classman === 0 && major === 1) {
    return 0.22;
  }

  if (classman === 0 && major === 0) {
    return 0.35;
  }
}

function p_cs205l(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.65;
  }

  if (classman === 1 && major === 0) {
    return 0.17;
  }

  if (classman === 0 && major === 1) {
    return 0.12;
  }

  if (classman === 0 && major === 0) {
    return 0.18;
  }
}

function p_cs206(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.8;
  }

  if (classman === 1 && major === 0) {
    return 0.86;
  }

  if (classman === 0 && major === 1) {
    return 0.69;
  }

  if (classman === 0 && major === 0) {
    return 0.21;
  }
}

function p_cs210a(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.78;
  }

  if (classman === 1 && major === 0) {
    return 0.43;
  }

  if (classman === 0 && major === 1) {
    return 0.14;
  }

  if (classman === 0 && major === 0) {
    return 0.17;
  }
}

function p_cs217(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.24;
  }

  if (classman === 1 && major === 0) {
    return 0.13;
  }

  if (classman === 0 && major === 1) {
    return 0.94;
  }

  if (classman === 0 && major === 0) {
    return 0.85;
  }
}

function p_cs221(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.38;
  }

  if (classman === 1 && major === 0) {
    return 0.87;
  }

  if (classman === 0 && major === 1) {
    return 0.76;
  }

  if (classman === 0 && major === 0) {
    return 0.87;
  }
}

function p_cs223a(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.82;
  }

  if (classman === 1 && major === 0) {
    return 0.15;
  }

  if (classman === 0 && major === 1) {
    return 0.72;
  }

  if (classman === 0 && major === 0) {
    return 0.25;
  }
}

function p_cs224n(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.81;
  }

  if (classman === 1 && major === 0) {
    return 0.56;
  }

  if (classman === 0 && major === 1) {
    return 0.54;
  }

  if (classman === 0 && major === 0) {
    return 0.61;
  }
}

function p_cs224r(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.13;
  }

  if (classman === 1 && major === 0) {
    return 0.12;
  }

  if (classman === 0 && major === 1) {
    return 0.59;
  }

  if (classman === 0 && major === 0) {
    return 0.55;
  }
}

function p_cs224s(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.13;
  }

  if (classman === 1 && major === 0) {
    return 0.73;
  }

  if (classman === 0 && major === 1) {
    return 0.18;
  }

  if (classman === 0 && major === 0) {
    return 0.17;
  }
}

function p_cs224u(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.8;
  }

  if (classman === 1 && major === 0) {
    return 0.4;
  }

  if (classman === 0 && major === 1) {
    return 0.61;
  }

  if (classman === 0 && major === 0) {
    return 0.9;
  }
}

function p_cs224v(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.65;
  }

  if (classman === 1 && major === 0) {
    return 0.46;
  }

  if (classman === 0 && major === 1) {
    return 0.44;
  }

  if (classman === 0 && major === 0) {
    return 0.57;
  }
}

function p_cs224w(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.27;
  }

  if (classman === 1 && major === 0) {
    return 0.1;
  }

  if (classman === 0 && major === 1) {
    return 0.4;
  }

  if (classman === 0 && major === 0) {
    return 0.23;
  }
}

function p_cs225a(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.79;
  }

  if (classman === 1 && major === 0) {
    return 0.11;
  }

  if (classman === 0 && major === 1) {
    return 0.43;
  }

  if (classman === 0 && major === 0) {
    return 0.85;
  }
}

function p_cs227b(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.61;
  }

  if (classman === 1 && major === 0) {
    return 0.17;
  }

  if (classman === 0 && major === 1) {
    return 0.72;
  }

  if (classman === 0 && major === 0) {
    return 0.88;
  }
}

function p_cs228(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.69;
  }

  if (classman === 1 && major === 0) {
    return 0.76;
  }

  if (classman === 0 && major === 1) {
    return 0.54;
  }

  if (classman === 0 && major === 0) {
    return 0.03;
  }
}

function p_cs229(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.87;
  }

  if (classman === 1 && major === 0) {
    return 0.51;
  }

  if (classman === 0 && major === 1) {
    return 0.13;
  }

  if (classman === 0 && major === 0) {
    return 0.55;
  }
}

function p_cs229m(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.56;
  }

  if (classman === 1 && major === 0) {
    return 0.12;
  }

  if (classman === 0 && major === 1) {
    return 0.45;
  }

  if (classman === 0 && major === 0) {
    return 0.33;
  }
}

function p_cs229t(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.3;
  }

  if (classman === 1 && major === 0) {
    return 0.59;
  }

  if (classman === 0 && major === 1) {
    return 0.87;
  }

  if (classman === 0 && major === 0) {
    return 0.58;
  }
}

function p_cs230(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.49;
  }

  if (classman === 1 && major === 0) {
    return 0.25;
  }

  if (classman === 0 && major === 1) {
    return 0.69;
  }

  if (classman === 0 && major === 0) {
    return 0.79;
  }
}

function p_cs231a(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.73;
  }

  if (classman === 1 && major === 0) {
    return 0.95;
  }

  if (classman === 0 && major === 1) {
    return 0.06;
  }

  if (classman === 0 && major === 0) {
    return 0.73;
  }
}

function p_cs231c(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.76;
  }

  if (classman === 1 && major === 0) {
    return 0.75;
  }

  if (classman === 0 && major === 1) {
    return 0.02;
  }

  if (classman === 0 && major === 0) {
    return 0.99;
  }
}

function p_cs231n(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.08;
  }

  if (classman === 1 && major === 0) {
    return 0.92;
  }

  if (classman === 0 && major === 1) {
    return 0.28;
  }

  if (classman === 0 && major === 0) {
    return 0.63;
  }
}

function p_cs232(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.99;
  }

  if (classman === 1 && major === 0) {
    return 0.72;
  }

  if (classman === 0 && major === 1) {
    return 0.94;
  }

  if (classman === 0 && major === 0) {
    return 0.77;
  }
}

function p_cs233(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.39;
  }

  if (classman === 1 && major === 0) {
    return 0.38;
  }

  if (classman === 0 && major === 1) {
    return 0.17;
  }

  if (classman === 0 && major === 0) {
    return 0.18;
  }
}

function p_cs234(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.99;
  }

  if (classman === 1 && major === 0) {
    return 0.42;
  }

  if (classman === 0 && major === 1) {
    return 0.01;
  }

  if (classman === 0 && major === 0) {
    return 0.02;
  }
}

function p_cs235(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.73;
  }

  if (classman === 1 && major === 0) {
    return 0.11;
  }

  if (classman === 0 && major === 1) {
    return 0.37;
  }

  if (classman === 0 && major === 0) {
    return 0.39;
  }
}

function p_cs237a(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.17;
  }

  if (classman === 1 && major === 0) {
    return 0.06;
  }

  if (classman === 0 && major === 1) {
    return 0.11;
  }

  if (classman === 0 && major === 0) {
    return 0.69;
  }
}

function p_cs237b(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.18;
  }

  if (classman === 1 && major === 0) {
    return 0.11;
  }

  if (classman === 0 && major === 1) {
    return 0.8;
  }

  if (classman === 0 && major === 0) {
    return 0.65;
  }
}

function p_cs238(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.75;
  }

  if (classman === 1 && major === 0) {
    return 0.57;
  }

  if (classman === 0 && major === 1) {
    return 0.83;
  }

  if (classman === 0 && major === 0) {
    return 0.26;
  }
}

function p_cs240(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.59;
  }

  if (classman === 1 && major === 0) {
    return 0.39;
  }

  if (classman === 0 && major === 1) {
    return 0.58;
  }

  if (classman === 0 && major === 0) {
    return 0.55;
  }
}

function p_cs240lx(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.24;
  }

  if (classman === 1 && major === 0) {
    return 0.91;
  }

  if (classman === 0 && major === 1) {
    return 0.14;
  }

  if (classman === 0 && major === 0) {
    return 0.89;
  }
}

function p_cs242(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.81;
  }

  if (classman === 1 && major === 0) {
    return 0.94;
  }

  if (classman === 0 && major === 1) {
    return 0.08;
  }

  if (classman === 0 && major === 0) {
    return 0.93;
  }
}

function p_cs243(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.07;
  }

  if (classman === 1 && major === 0) {
    return 0.29;
  }

  if (classman === 0 && major === 1) {
    return 0.65;
  }

  if (classman === 0 && major === 0) {
    return 0.6;
  }
}

function p_cs244(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.82;
  }

  if (classman === 1 && major === 0) {
    return 0.28;
  }

  if (classman === 0 && major === 1) {
    return 0.99;
  }

  if (classman === 0 && major === 0) {
    return 0.01;
  }
}

function p_cs244b(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.86;
  }

  if (classman === 1 && major === 0) {
    return 0.52;
  }

  if (classman === 0 && major === 1) {
    return 0.43;
  }

  if (classman === 0 && major === 0) {
    return 0.08;
  }
}

function p_cs245(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.91;
  }

  if (classman === 1 && major === 0) {
    return 0.44;
  }

  if (classman === 0 && major === 1) {
    return 0.78;
  }

  if (classman === 0 && major === 0) {
    return 0.41;
  }
}

function p_cs246(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.79;
  }

  if (classman === 1 && major === 0) {
    return 0.43;
  }

  if (classman === 0 && major === 1) {
    return 0.07;
  }

  if (classman === 0 && major === 0) {
    return 0.38;
  }
}

function p_cs247(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.73;
  }

  if (classman === 1 && major === 0) {
    return 0.86;
  }

  if (classman === 0 && major === 1) {
    return 0.03;
  }

  if (classman === 0 && major === 0) {
    return 0.14;
  }
}

function p_cs248(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.56;
  }

  if (classman === 1 && major === 0) {
    return 0.59;
  }

  if (classman === 0 && major === 1) {
    return 0.22;
  }

  if (classman === 0 && major === 0) {
    return 0.53;
  }
}

function p_cs250(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.84;
  }

  if (classman === 1 && major === 0) {
    return 0.63;
  }

  if (classman === 0 && major === 1) {
    return 0.89;
  }

  if (classman === 0 && major === 0) {
    return 0.31;
  }
}

function p_cs251(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.25;
  }

  if (classman === 1 && major === 0) {
    return 0.23;
  }

  if (classman === 0 && major === 1) {
    return 0.48;
  }

  if (classman === 0 && major === 0) {
    return 0.65;
  }
}

function p_cs252(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.28;
  }

  if (classman === 1 && major === 0) {
    return 0.53;
  }

  if (classman === 0 && major === 1) {
    return 0.66;
  }

  if (classman === 0 && major === 0) {
    return 0.82;
  }
}

function p_cs254(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.67;
  }

  if (classman === 1 && major === 0) {
    return 0.83;
  }

  if (classman === 0 && major === 1) {
    return 0.3;
  }

  if (classman === 0 && major === 0) {
    return 0.15;
  }
}

function p_cs254b(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.08;
  }

  if (classman === 1 && major === 0) {
    return 0.19;
  }

  if (classman === 0 && major === 1) {
    return 0.51;
  }

  if (classman === 0 && major === 0) {
    return 0.76;
  }
}

function p_cs255(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.49;
  }

  if (classman === 1 && major === 0) {
    return 0.28;
  }

  if (classman === 0 && major === 1) {
    return 0.67;
  }

  if (classman === 0 && major === 0) {
    return 0.43;
  }
}

function p_cs256(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.27;
  }

  if (classman === 1 && major === 0) {
    return 0.84;
  }

  if (classman === 0 && major === 1) {
    return 0.6;
  }

  if (classman === 0 && major === 0) {
    return 0.12;
  }
}

function p_cs257(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.01;
  }

  if (classman === 1 && major === 0) {
    return 0.79;
  }

  if (classman === 0 && major === 1) {
    return 0.44;
  }

  if (classman === 0 && major === 0) {
    return 0.89;
  }
}

function p_cs259q(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.39;
  }

  if (classman === 1 && major === 0) {
    return 0.25;
  }

  if (classman === 0 && major === 1) {
    return 0.68;
  }

  if (classman === 0 && major === 0) {
    return 0.11;
  }
}

function p_cs261(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.35;
  }

  if (classman === 1 && major === 0) {
    return 0.34;
  }

  if (classman === 0 && major === 1) {
    return 0.6;
  }

  if (classman === 0 && major === 0) {
    return 0.04;
  }
}

function p_cs263(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.64;
  }

  if (classman === 1 && major === 0) {
    return 0.99;
  }

  if (classman === 0 && major === 1) {
    return 0.71;
  }

  if (classman === 0 && major === 0) {
    return 0.2;
  }
}

function p_cs265(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.45;
  }

  if (classman === 1 && major === 0) {
    return 0.51;
  }

  if (classman === 0 && major === 1) {
    return 0.55;
  }

  if (classman === 0 && major === 0) {
    return 0.88;
  }
}

function p_cs269i(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.96;
  }

  if (classman === 1 && major === 0) {
    return 0.61;
  }

  if (classman === 0 && major === 1) {
    return 0.03;
  }

  if (classman === 0 && major === 0) {
    return 0.59;
  }
}

function p_cs269o(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.78;
  }

  if (classman === 1 && major === 0) {
    return 0.9;
  }

  if (classman === 0 && major === 1) {
    return 0.19;
  }

  if (classman === 0 && major === 0) {
    return 0.99;
  }
}

function p_cs269q(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.13;
  }

  if (classman === 1 && major === 0) {
    return 0.79;
  }

  if (classman === 0 && major === 1) {
    return 0.28;
  }

  if (classman === 0 && major === 0) {
    return 0.18;
  }
}

function p_cs270(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.75;
  }

  if (classman === 1 && major === 0) {
    return 0.15;
  }

  if (classman === 0 && major === 1) {
    return 0.47;
  }

  if (classman === 0 && major === 0) {
    return 0.55;
  }
}

function p_cs271(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.76;
  }

  if (classman === 1 && major === 0) {
    return 0.89;
  }

  if (classman === 0 && major === 1) {
    return 0.41;
  }

  if (classman === 0 && major === 0) {
    return 0.8;
  }
}

function p_cs272(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.7;
  }

  if (classman === 1 && major === 0) {
    return 0.95;
  }

  if (classman === 0 && major === 1) {
    return 0.71;
  }

  if (classman === 0 && major === 0) {
    return 0.35;
  }
}

function p_cs273a(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.77;
  }

  if (classman === 1 && major === 0) {
    return 0.36;
  }

  if (classman === 0 && major === 1) {
    return 0.03;
  }

  if (classman === 0 && major === 0) {
    return 0.33;
  }
}

function p_cs273b(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.68;
  }

  if (classman === 1 && major === 0) {
    return 0.47;
  }

  if (classman === 0 && major === 1) {
    return 0.67;
  }

  if (classman === 0 && major === 0) {
    return 0.84;
  }
}

function p_cs274(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.97;
  }

  if (classman === 1 && major === 0) {
    return 0.77;
  }

  if (classman === 0 && major === 1) {
    return 0.93;
  }

  if (classman === 0 && major === 0) {
    return 0.88;
  }
}

function p_cs275(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.13;
  }

  if (classman === 1 && major === 0) {
    return 0.74;
  }

  if (classman === 0 && major === 1) {
    return 0.98;
  }

  if (classman === 0 && major === 0) {
    return 0.01;
  }
}

function p_cs276(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.82;
  }

  if (classman === 1 && major === 0) {
    return 0.58;
  }

  if (classman === 0 && major === 1) {
    return 0.64;
  }

  if (classman === 0 && major === 0) {
    return 0.72;
  }
}

function p_cs278(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.63;
  }

  if (classman === 1 && major === 0) {
    return 0.38;
  }

  if (classman === 0 && major === 1) {
    return 0.6;
  }

  if (classman === 0 && major === 0) {
    return 0.96;
  }
}

function p_cs279(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.54;
  }

  if (classman === 1 && major === 0) {
    return 0.84;
  }

  if (classman === 0 && major === 1) {
    return 0.4;
  }

  if (classman === 0 && major === 0) {
    return 0.2;
  }
}

function p_cs281(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.49;
  }

  if (classman === 1 && major === 0) {
    return 0.19;
  }

  if (classman === 0 && major === 1) {
    return 0.05;
  }

  if (classman === 0 && major === 0) {
    return 0.72;
  }
}

function p_cs330(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.52;
  }

  if (classman === 1 && major === 0) {
    return 0.24;
  }

  if (classman === 0 && major === 1) {
    return 0.1;
  }

  if (classman === 0 && major === 0) {
    return 0.82;
  }
}

function p_cs333(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.98;
  }

  if (classman === 1 && major === 0) {
    return 0.91;
  }

  if (classman === 0 && major === 1) {
    return 0.57;
  }

  if (classman === 0 && major === 0) {
    return 0.31;
  }
}

function p_cs334a(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.82;
  }

  if (classman === 1 && major === 0) {
    return 0.17;
  }

  if (classman === 0 && major === 1) {
    return 0.15;
  }

  if (classman === 0 && major === 0) {
    return 0.52;
  }
}

function p_cs336(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.14;
  }

  if (classman === 1 && major === 0) {
    return 0.48;
  }

  if (classman === 0 && major === 1) {
    return 0.61;
  }

  if (classman === 0 && major === 0) {
    return 0.57;
  }
}

function p_cs342(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.87;
  }

  if (classman === 1 && major === 0) {
    return 0.42;
  }

  if (classman === 0 && major === 1) {
    return 0.52;
  }

  if (classman === 0 && major === 0) {
    return 0.26;
  }
}

function p_cs348(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.16;
  }

  if (classman === 1 && major === 0) {
    return 0.94;
  }

  if (classman === 0 && major === 1) {
    return 0.39;
  }

  if (classman === 0 && major === 0) {
    return 0.17;
  }
}

function p_cs351(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.91;
  }

  if (classman === 1 && major === 0) {
    return 0.66;
  }

  if (classman === 0 && major === 1) {
    return 0.04;
  }

  if (classman === 0 && major === 0) {
    return 0.07;
  }
}

function p_cs352(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.16;
  }

  if (classman === 1 && major === 0) {
    return 0.34;
  }

  if (classman === 0 && major === 1) {
    return 0.27;
  }

  if (classman === 0 && major === 0) {
    return 0.67;
  }
}

function p_cs361(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.78;
  }

  if (classman === 1 && major === 0) {
    return 0.32;
  }

  if (classman === 0 && major === 1) {
    return 0.4;
  }

  if (classman === 0 && major === 0) {
    return 0.29;
  }
}

function p_cs369l(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.57;
  }

  if (classman === 1 && major === 0) {
    return 0.5;
  }

  if (classman === 0 && major === 1) {
    return 0.29;
  }

  if (classman === 0 && major === 0) {
    return 0.13;
  }
}

function p_cs398(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.41;
  }

  if (classman === 1 && major === 0) {
    return 0.09;
  }

  if (classman === 0 && major === 1) {
    return 0.41;
  }

  if (classman === 0 && major === 0) {
    return 0.22;
  }
}

function p_cs448b(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.99;
  }

  if (classman === 1 && major === 0) {
    return 0.39;
  }

  if (classman === 0 && major === 1) {
    return 0.5;
  }

  if (classman === 0 && major === 0) {
    return 0.42;
  }
}

function p_cme108(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.09;
  }

  if (classman === 1 && major === 0) {
    return 0.92;
  }

  if (classman === 0 && major === 1) {
    return 0.6;
  }

  if (classman === 0 && major === 0) {
    return 0.61;
  }
}

function p_ee180(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.19;
  }

  if (classman === 1 && major === 0) {
    return 0.12;
  }

  if (classman === 0 && major === 1) {
    return 0.1;
  }

  if (classman === 0 && major === 0) {
    return 0.08;
  }
}

function p_ee267(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.59;
  }

  if (classman === 1 && major === 0) {
    return 0.85;
  }

  if (classman === 0 && major === 1) {
    return 0.06;
  }

  if (classman === 0 && major === 0) {
    return 0.59;
  }
}

function p_ee282(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.22;
  }

  if (classman === 1 && major === 0) {
    return 0.51;
  }

  if (classman === 0 && major === 1) {
    return 0.65;
  }

  if (classman === 0 && major === 0) {
    return 0.89;
  }
}

function p_ee374(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.3;
  }

  if (classman === 1 && major === 0) {
    return 0.76;
  }

  if (classman === 0 && major === 1) {
    return 0.37;
  }

  if (classman === 0 && major === 0) {
    return 0.06;
  }
}

function p_mse234(classman, major) {
  if (classman === 1 && major === 1) {
    return 0.36;
  }

  if (classman === 1 && major === 0) {
    return 0.57;
  }

  if (classman === 0 && major === 1) {
    return 0.19;
  }

  if (classman === 0 && major === 0) {
    return 0.96;
  }
}

probref = {
	"CS108": p_cs108,
	"CS112": p_cs112,
	"CS112E": p_cs112e,
	"CS124": p_cs124,
	"CS131": p_cs131,
	"CS140": p_cs140,
	"CS140E": p_cs140e,
	"CS212": p_cs212,
	"CS142": p_cs142,
	"CS143": p_cs143,
	"CS144": p_cs144,
	"CS145": p_cs146,
	"CS147": p_cs147,
	"CS148": p_cs148,
	"CS149": p_cs149,
	"CS151": p_cs151,
	"CS154": p_cs154,
	"CS155": p_cs155,
	"CS157": p_cs157,
	"PHIL151": p_phil151,
	"CS163": p_cs163,
	"CS166": p_cs166,
	"CS168": p_cs168,
	"CS173": p_cs173,
	"CS190": p_cs190,
	"CS195": p_cs195,
	"CS197": p_cs197,
	"CS205L": p_cs205l,
	"CS206": p_cs206,
	"CS210A": p_cs210a,
	"CS217": p_cs217,
	"CS221": p_cs221,
	"CS223A": p_cs223a,
	"CS224N": p_cs224n,
	"CS224R": p_cs224r,
	"CS224S": p_cs224s,
	"CS224U": p_cs224u,
	"CS224V": p_cs224v,
	"CS224W": p_cs224w,
	"CS225A": p_cs225a,
	"CS227B": p_cs227b,
	"CS228": p_cs228,
	"CS229": p_cs229,
	"CS229M": p_cs229m,
	"CS229T": p_cs229t,
	"CS230": p_cs230,
	"CS231A": p_cs231a,
	"CS231C": p_cs231c,
	"CS231N": p_cs231n,
	"CS232": p_cs232,
	"CS233": p_cs233,
	"CS234": p_cs234,
	"CS235": p_cs235,
	"CS237A": p_cs237a,
	"CS237B": p_cs238,
	"CS240": p_cs240,
	"CS240LX": p_cs240lx,
	"CS242": p_cs242,
	"CS243": p_cs243,
	"CS244": p_cs244,
	"CS244B": p_cs244b,
	"CS245": p_cs245,
	"CS246": p_cs246,
	"cs247": p_cs247,
	"CS248": p_cs248,
	"CS250": p_cs250,
	"CS251": p_cs251,
	"CS252": p_cs252,
	"CS254": p_cs254,
	"CS254B": p_cs254b,
	"CS255": p_cs255,
	"CS256": p_cs256,
	"CS257": p_cs257,
	"CS259Q": p_cs259q,
	"CS261": p_cs261,
	"CS263": p_cs263,
	"CS265": p_cs265,
	"CS269I": p_cs269i,
	"CS269O": p_cs269o,
	"CS269Q": p_cs269q,
	"CS270": p_cs270,
	"CS271": p_cs271,
	"CS272": p_cs272,
	"CS273A": p_cs273a,
	"CS273B": p_cs273b,
	"CS274": p_cs274,
	"CS275": p_cs275,
	"CS276": p_cs276,
	"CS278": p_cs278,
	"CS279": p_cs279,
	"CS281": p_cs281,
	"CS330": p_cs330,
	"CS333": p_cs333,
	"CS334A": p_cs334a,
	"CS336": p_cs336,
	"CS342": p_cs342,
	"CS348": p_cs348,
	"CS351": p_cs351,
	"CS352": p_cs352,
	"CS361": p_cs361,
	"CS369L": p_cs369l,
	"CS398": p_cs398,
	"CS448B": p_cs448b,
	"CME108": p_cme108,
	"EE180": p_ee180,
	"EE267": p_ee267,
	"EE282": p_ee282,
	"EE374": p_ee374,
	"MS&E234": p_mse234
  };


function bernoulli(p) {
    if (Math.random() < p) {
		return 1
	}
	else {
		return 0
	}
}
function create_joint_sample(refer, observe) {
	var sample = {}
	sample["class"] = bernoulli(0.76)
	sample["major"] = bernoulli(0.3)
	for (var key in observe) {
		if (key === "class" || key === "major") {
			continue;
		}
		let prob = probref[key](sample["class"], sample["major"])
		sample[key] = bernoulli(prob)
	}
	let prob_ref = probref[refer](sample["class"], sample["major"])
	sample[refer] = bernoulli(prob_ref)
	console.log(sample)
	return sample
}

function matches(sample_, observing) {
	for (var key in observing) {
		console.log(key)
		if (observing[key] !== sample_[key]) {
			return false
		}
	}
	return true
}

function bayesnet(ref_, observation) {
	var ref_counter = 1
	var obs_met = 2
	

	for (let i = 0; i < N_SAMPLES; i++) {
		console.log("Observation: ", observation)
		joint_sample = create_joint_sample(ref_, observation)
	
		if (matches(joint_sample, observation)) {
			obs_met += 1
			console.log("Obs met")
			if (joint_sample[ref_] === 1) {
				ref_counter += 1
				console.log("Ref counted")
			}

		}
	}
	return ref_counter / obs_met

	
}

  
  calc.onclick = (e) => {
    e.preventDefault();

    var classtype = document.querySelector('#class')
    var classtype_value = classtype.value
    var year = 0

    var majortype = document.querySelector('#major')
    var majortype_value = majortype.value
    var major = 0

    if (classtype_value === "Upper") {
      year = 1
    }
    if (majortype_value === "Stem") {
      major = 1
    }

    var Observation = {
      "class" : year,
      "major" : major
    }

    var reference = document.querySelector('#elective')
    var reference_value = reference.value

    for (let i = 0; i < listbox.options.length; i++) {
      Observation[listbox.options[i].value] = 1
      
    };

    for (let i = 0; i < listbox2.options.length; i++) {
      Observation[listbox2.options[i].value] = 0
      
    };

    var probability = bayesnet(reference_value, Observation)
    console.log(Observation)
    document.querySelector('.output').textContent = probability
	

  };

