(function(window, undefined) {
  var dictionary = {
    "5d2bc6b6-72be-4bab-81c2-c0f67e3fc57e": "Usuarios",
    "3e4c7d18-bdfc-46d2-9c3d-563af05fd8cd": "Clientes Actualizar",
    "98dd0246-3328-43b5-b936-e91ce89c6f55": "Destinatarios Actualizar Menú",
    "6b60547a-1f49-4634-be9e-78a23595a606": "Contactos Crear",
    "1b65ca5a-64b8-4ff5-88f5-a7f182e3e73c": "Ordenes Entregas Fallidas",
    "fb17378b-6735-4268-8f2d-769de4c94c0a": "Impresión Ticket",
    "7733ff58-2fbf-43a9-8f06-dc03747f6cbf": "Ordenes Entregadas",
    "5c88321d-6b7f-4e15-b6cf-9ba3492192ab": "Crear Destino Menú",
    "c0d86d48-319c-4fae-9481-0777492afd92": "Ordenes Sin asignar",
    "e7ae7b83-771f-4d60-b035-9748400e29d6": "Clientes Crear",
    "88e92d44-4191-47d9-8dbe-9b8b908d550f": "Entregas",
    "6aa1624b-be32-4772-9061-9473643aea81": "Datos Generales Siguiente",
    "9ff2f8c2-cdcb-4d44-9a26-b1c6fa4cabf0": "Ordenes Resumen",
    "78d78535-2307-41f1-9b24-8c484836a232": "Contacto Actualizar",
    "05c0f6d4-c734-4cef-a05a-2574d1f2b37e": "Orden en Borrador",
    "74b784ee-3570-4455-b80f-0e1a10202e97": "Unidades Actualizar",
    "b3424420-7ff4-4e5c-a5c1-02b449e60a72": "Destinatario Crear",
    "4d35e83c-3f5c-469b-9615-78de6e9860b6": "Busqueda",
    "98ad5812-69ae-4a47-b681-31de39b7fee1": "Unidades",
    "9bd1fe8e-8b14-4383-b845-9ac8654e2810": "Datos Generales",
    "b3d446c1-2b49-42ea-b0a3-020f2660afe6": "Clientes Crear desde Orden",
    "b67716d4-95b6-4b0a-af93-a0bd7a46b4c6": "Operadores",
    "23ee43c2-7107-4137-86b0-d2e3c209cadf": "Usuarios Actualizar",
    "085422b7-8244-4712-b060-552f85380104": "Ordenes Recolectadas",
    "bb5a6413-5403-40dc-9346-b4acc2a6fd61": "Destinatarios Crear desde Orden",
    "1d33dc2e-9904-409e-b5a8-cc637473b8a3": "Crear Contactos desde Orden",
    "f0ce587a-35b0-4c10-be26-a8b081394f66": "Operadores Actualizar",
    "4137d4db-e25a-4e2c-b65e-4ace74e47513": "Acuse de entrega Verizon Servicios Empresariales",
    "1f5b1662-b092-4a10-a3af-7fe14febba77": "Screen Huerfano",
    "b78b6f0d-8a12-478c-b6f7-591095bd9a9e": "Destinos Crear",
    "f28606bf-f2b4-436c-a0ff-4a80d76cf625": "Contactos",
    "d154fb2a-bc4f-4ecb-ac70-c5e4986fd241": "Destinatarios Actualizar",
    "17734f23-9f27-4b81-a79b-9f1df47eb444": "Crear Contactos Menú",
    "fde4de6b-d46b-4017-814d-39ff1f8c655d": "Destinatarios Menú",
    "f71bf11e-663d-4721-9280-6c36baa57a2f": "Crear Destino desde Orden",
    "e2a1c90d-e870-41ed-a211-68e5ab39ea70": "Ordenes en Almacén",
    "d53b9dc7-cc1a-425f-b18f-3849e04bb59d": "Destino Actualizar",
    "430c5c36-1738-4098-9e31-d4d74450c759": "Clientes",
    "2bd6a1ac-3c40-432b-8a6a-39f011727598": "Unidades Crear",
    "99474b1e-833d-4024-8f9f-446b38e797de": "Ordenes En Ruta",
    "23269caa-47a0-4046-9d3f-40fc17a5aa9e": "Destinos",
    "6e0b19a4-29ca-41da-ae97-60bd210bf054": "Operadores Crear",
    "d97299ac-1a52-4b81-a6ad-555197e841c3": "Destino Actualizar Menú",
    "8b655175-4c5d-4fff-8cee-9bc4f809e374": "Ordenes En Recolección",
    "eb99f99b-e57a-4ba4-be6a-b1d930c60628": "Destinatarios",
    "01a3a25d-909b-442d-bb90-1958c7a51da6": "Usuarios Crear",
    "1fd7ace2-6563-4e78-accb-57242959d681": "Asignar",
    "543abd4a-1ef3-4935-b3d5-66b162e9cf1e": "Usuario Restablecer Contraseña",
    "205c39f8-901b-4b14-9743-8f0b12084300": "Destinatario Menú",
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