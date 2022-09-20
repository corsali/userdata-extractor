import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourAddressBooks } from "../models/yourAddressBooks.js";

class YourAddressBooksJson extends JsonExtractor {
  async process() {
    const addressBook = this.query(`$.address_book_v2.address_book.*`);

    addressBook.forEach((contact) => {
      // This makes sure that the contact gets saved even if there are no contact points associated with it.
      const details = contact.details?.length > 0 ? contact.details : [{}];

      details.forEach((detail?: { contact_point?: string }) => {
        this.table.rows.push(
          new YourAddressBooks({
            contactName: contact.name,
            contactPoint: detail?.contact_point,
            dateCreated: contact.created_timestamp,
            dateUpdated: contact.updated_timestamp,
          })
        );
      });
    });
  }
}

export const yourAddressBooksJson = new YourAddressBooksJson(
  config.SERVICE_FACEBOOK,
  ".*/your_address_books.json",
  "your_address_books"
);
