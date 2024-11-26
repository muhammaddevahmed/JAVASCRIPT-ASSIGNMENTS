document.getElementById('loadData').addEventListener('click', () => {
    
    const iframe = document.createElement('iframe');
    iframe.src = 'index2.html'; 
    iframe.style.display = 'none'; 
    
    
    iframe.onload = () => {
      const iframeContent = iframe.contentDocument.body.innerHTML;
      document.getElementById('content').innerHTML = iframeContent; 
    };

    
    document.body.appendChild(iframe);
  });

  