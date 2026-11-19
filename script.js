const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('#nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
// Production integration: replace with existing CRM handler from current live site. Do not save leads locally or claim submission success here.
document.querySelector('#waitlist-form').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget,status=form.querySelector('.form-status');if(!form.reportValidity())return;status.textContent='Preview only: submission is not active until the existing HAUL CRM integration is connected.';});


// Review-only business form; no network request is made.
document.querySelector('#business-form').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;form.querySelector('.form-status').textContent='Preview only: your inquiry has not been sent. Production CRM mapping is required.';});
document.querySelectorAll('a[data-inquiry]').forEach(a=>a.addEventListener('click',()=>{const role=a.dataset.inquiry;const select=document.querySelector('#inquiry-role');if(select)select.value=role;}));
