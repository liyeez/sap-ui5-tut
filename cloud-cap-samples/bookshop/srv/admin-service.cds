using { sap.capire.bookshop as myb } from '../db/schema';
service AdminService {
  entity Books as projection on myb.Books;
  entity Authors as projection on myb.Authors;
}
