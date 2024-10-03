function sidebar() {
  const li = document.querySelectorAll('.sidebar ul li');
  for (let index = 0; index < li.length; index++) {
    const element = li[index];
    if (menuSub = element.querySelector('ul')) {
      const menuToggle = element.querySelector('.menu-toggle');
      menuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        element.classList.toggle('open');
      })
    }
  }
}
sidebar();

function preview(el) {
  el.src = URL.createObjectURL(event.target.files[0]);
  el.closest('.file-uploader').querySelector('.file-previews').style.display = 'block';
}

function sidebarToggle() {
  const btn = document.getElementById('sidebar-toggle-btn');
  const sidebar = document.getElementById('sidebar');
  const browserWidth = window.innerWidth || document.documentElement.clientWidth;

  function sidebarCollapsed() {
    sidebar.classList.toggle('collapsed');
  }

  if (browserWidth > 768) {
    sidebarCollapsed();
  } else {
    sidebar.classList.toggle('open');
  }
}

function headerProfileMenuToggle() {
  const headerProfileMenuBtn = document.getElementById('header-profile-menu-btn');
  const headerProfileMenuCard = document.querySelector('.header-profile-menu-card');
  headerProfileMenuCard.classList.toggle('active');
}

function tabs() {
  const btns = document.querySelectorAll('.tabs .btn');
  function resetActiveBtn() {
    btns.forEach(btn => {
      btn.classList.remove('active');
    });
  }
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      resetActiveBtn();
      btn.classList.add('active');
    })
  })
}
tabs();



// all plugins init

var {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin
} = OverlayScrollbarsGlobal;

const osInstance = OverlayScrollbars(document.querySelector('#sidebar-scroller'), {});


FilePond.registerPlugin(
  // FilePondPluginFileEncode, // encodes the file as base64 data
  // FilePondPluginFileValidateSize, // validates the size of the file
  // FilePondPluginImageExifOrientation, // corrects mobile image orientation
  FilePondPluginImagePreview // previews dropped images
);
FilePond.create(
  document.querySelector('.filepond')
);


const toolbarOptions = [
  [{ 'font': [] }],
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['link', 'image', 'video', 'formula'],
  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'align': [] }],
  ['clean'],                                        // remove formatting button
  ['blockquote', 'code-block'],
];

const quill = new Quill('#editor', {
  modules: {
    syntax: true,
    toolbar: toolbarOptions,
  },
  theme: 'snow'
});


