import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Relationships } from "../models/relationships.js";

class RelationshipsJson extends JsonExtractor {
  async process() {
    const relationship = this.query(`$.profile_v2.relationship`)[0];

    if (relationship != null) {
      const anniversary = new Date(
        relationship?.anniversary?.year,
        relationship?.anniversary?.month - 1,
        relationship?.anniversary?.day ?? 1
      );
      this.table.rows.push(
        new Relationships(
          relationship.status ?? "Partner",
          relationship.partner,
          relationship.timestamp,
          anniversary
        )
      );
    }

    const familyMembers = this.query(`$.profile_v2.family_members.*`);

    familyMembers.forEach((familyMember) => {
      this.table.rows.push(
        new Relationships(
          familyMember.relation ?? "Family Member",
          familyMember.name,
          familyMember.timestamp
        )
      );
    });

    const previousRelationships = this.query(
      `$.profile_v2.previous_relationships.*`
    );

    previousRelationships.forEach((previousRelationship) => {
      this.table.rows.push(
        new Relationships(
          "Previous Relationship",
          previousRelationship.name,
          previousRelationship.timestamp
        )
      );
    });
  }
}

export const relationshipsJson = new RelationshipsJson(
  config.SERVICE_FACEBOOK,
  ".*/profile_information.json",
  "relationships"
);
