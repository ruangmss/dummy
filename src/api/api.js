const BASE_URL = 'https://dummyjson.com';

// Utiliza um objeto para permitir passar apenas os filtros desejados, em qualquer ordem. A desestruturação aplica os valores padrão às opções não informadas
export function PRODUCTS_GET({ page = 1, limit = 12, category = '', query = '', sortBy = '', order = 'asc' } = {}) {
  const skip = (page - 1) * limit;

  const params = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
  });

  if (sortBy) {
    params.set('sortBy', sortBy);
    params.set('order', order);
  }

  let endpoint = '/products';

  if (category) {
    // Codifica a categoria para que caracteres especiais sejam válidos na URL
    endpoint = `/products/category/${encodeURIComponent(category)}`;
  } else if (query) {
    endpoint = '/products/search';
    params.set('q', query);
  }

  return {
    url: `${BASE_URL}${endpoint}?${params.toString()}`,
    options: {
      method: 'GET',
    },
  };
}

export function PRODUCT_GET(id) {
  return {
    url: `${BASE_URL}/products/${id}`,
    options: {
      method: 'GET',
    },
  };
}

export function PRODUCT_CATEGORIES_GET() {
  return {
    url: `${BASE_URL}/products/categories`,
    options: {
      method: 'GET',
    },
  };
}

export function LOGIN_POST(username, password) {
  return {
    url: `${BASE_URL}/auth/login`,
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    },
  };
}

export function AUTH_USER_GET(token) {
  return {
    url: `${BASE_URL}/auth/me`,
    options: {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    },
  };
}

export function USER_GET(id) {
  return {
    url: `${BASE_URL}/users/${id}`,
    options: {
      method: 'GET',
    },
  };
}

export function CART_ADD_POST(userId, products) {
  return {
    url: `${BASE_URL}/carts/add`,
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, products }),
    },
  };
}
