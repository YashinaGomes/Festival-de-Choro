function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}

// Função para limpar o cache
function clearCache() {
  if ('caches' in window) {
      caches.keys().then(function(cacheNames) {
          cacheNames.forEach(function(cacheName) {
              caches.delete(cacheName);
          });
      });
  }
}

// Chamar as funções ao carregar a página
window.onload = function() {
  deleteAllCookies();
  clearCache();
}