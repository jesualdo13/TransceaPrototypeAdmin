(function(window, undefined) {
  var dictionary = {
    "5d2bc6b6-72be-4bab-81c2-c0f67e3fc57e": "Usuarios",
    "3e4c7d18-bdfc-46d2-9c3d-563af05fd8cd": "Clientes Actualizar",
    "b78b6f0d-8a12-478c-b6f7-591095bd9a9e": "Destinos Crear",
    "6b60547a-1f49-4634-be9e-78a23595a606": "Contactos Crear",
    "d154fb2a-bc4f-4ecb-ac70-c5e4986fd241": "Destinatarios Actualizar",
    "f28606bf-f2b4-436c-a0ff-4a80d76cf625": "Contactos",
    "1b65ca5a-64b8-4ff5-88f5-a7f182e3e73c": "Ordenes Entregas Fallidas",
    "e2a1c90d-e870-41ed-a211-68e5ab39ea70": "Ordenes en Almacén",
    "7733ff58-2fbf-43a9-8f06-dc03747f6cbf": "Ordenes Entregadas",
    "d53b9dc7-cc1a-425f-b18f-3849e04bb59d": "Destino Actualizar",
    "c0d86d48-319c-4fae-9481-0777492afd92": "Ordenes Sin asignar",
    "430c5c36-1738-4098-9e31-d4d74450c759": "Clientes",
    "e7ae7b83-771f-4d60-b035-9748400e29d6": "Clientes Crear",
    "88e92d44-4191-47d9-8dbe-9b8b908d550f": "Entregas",
    "23269caa-47a0-4046-9d3f-40fc17a5aa9e": "Destinos",
    "99474b1e-833d-4024-8f9f-446b38e797de": "Ordenes En Ruta",
    "9ff2f8c2-cdcb-4d44-9a26-b1c6fa4cabf0": "Ordenes Resumen",
    "6aa1624b-be32-4772-9061-9473643aea81": "Datos Generales Siguiente",
    "8b655175-4c5d-4fff-8cee-9bc4f809e374": "Ordenes En Recolección",
    "78d78535-2307-41f1-9b24-8c484836a232": "Contacto Actualizar",
    "b3424420-7ff4-4e5c-a5c1-02b449e60a72": "Destinatarios Crear",
    "98ad5812-69ae-4a47-b681-31de39b7fee1": "Unidades",
    "9bd1fe8e-8b14-4383-b845-9ac8654e2810": "Datos Generales",
    "1fd7ace2-6563-4e78-accb-57242959d681": "Asignar",
    "b67716d4-95b6-4b0a-af93-a0bd7a46b4c6": "Operadores",
    "085422b7-8244-4712-b060-552f85380104": "Ordenes Recolectadas",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "91250b08-0f5e-426b-8b2c-1d193d97d774": "MenuLateral",
    "f3a6046d-6538-41eb-9f2d-122efbe250ed": "MenuSuperiorDerecho",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);