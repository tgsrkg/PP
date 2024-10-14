const { Page } = require("@playwright/test");

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productContainer = ".inventory_item";
    this.cartBadge = ".shopping_cart_badge";
    this.cartButton = ".shopping_cart_link";
  }

  async addProductToCart(productName) {
    const productElement = this.page
      .locator(this.productContainer)
      .filter({ hasText: productName });

    const priceBar = productElement.locator(".pricebar");
    const addToCartButton = priceBar.locator("button");
    await addToCartButton.click();
  }

  async getCartItemCount() {
    const cartCountText = await this.page.textContent(this.cartBadge);
    return cartCountText ? parseInt(cartCountText) : 0;
  }

  async goToCart() {
    await this.page.click(this.cartButton);
  }
}

module.exports = ProductsPage;
