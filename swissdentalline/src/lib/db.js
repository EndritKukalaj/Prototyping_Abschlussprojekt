import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("SwissDentalLine");

async function getTermine() {
  let termine = [];
  try {
    const collection = db.collection("termine");
    const query = {};

    termine = await collection.find(query).sort({ datum: 1 }).toArray();
  } catch (error) {
    console.log(error);
  }
  return termine;
}
async function getTerminFullDetails(id) {
  try {
    const termine = db.collection("termine");
    const zahnaerzte = db.collection("zahnaerzte");

    const query = { _id: id };
    const termin = await termine.findOne(query);

    if (!termin) {
      console.log("Kein Termin mit der ID " + id + " gefunden.");
      return null;
    }

    const zahnarzt = await zahnaerzte.findOne({ _id: termin.zahnarztId });

    return { termin, zahnarzt };

  } catch (error) {
    console.error("Fehler beim Abrufen der Termindetails:", error.message);
    return null;
  }
}

async function createTermin(termin) {
  try {
    const collection = db.collection("termine");
    termin._id = new ObjectId().toString();
    const result = await collection.insertOne(termin);
    return result.insertedId;
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function deleteTermin(id) {
  try {
    const collection = db.collection("termine");
    const query = { _id: id};
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("Kein Termin mit id " + id);
    } else {
      console.log("Termin mit id " + id + " wurde gelöscht.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function countAllTermine() {
  try {
    const collection = db.collection("termine");
    const count = await collection.countDocuments({});
    return count;
  } catch (error) {
    console.log("Fehler beim Zählen aller Termine:", error.message);
    return 0;
  }
}

async function countWartelisteTermine() {
  try {
    const collection = db.collection("termine");
    const query = { warteliste: true };
    const count = await collection.countDocuments(query);
    return count;
  } catch (error) {
    console.log("Fehler beim Zählen der Wartelisten-Termine:", error.message);
    return 0;
  }
}

async function getZahnaerzte() {
  let zahnaerzte = [];
  try {
    const collection = db.collection("zahnaerzte");
    const query = {};

    zahnaerzte = await collection.find(query).toArray();
  } catch (error) {
    console.log(error);
  }
  return zahnaerzte;
}

async function getZahnarztById(id) {
  let zahnarzt = null;
  try {
    const collection = db.collection("zahnaerzte");
    const query = { _id: id };
    zahnarzt = await collection.findOne(query);

    if (!zahnarzt) {
      console.log("Kein Zahnarzt mit der ID " + id + " gefunden.");
    }
  } catch (error) {
    console.log(error.message);
  }
  return zahnarzt;
}


export default {
  getTermine,
  getTerminFullDetails,
  createTermin,
  deleteTermin,
  countAllTermine,
  countWartelisteTermine,
  getZahnaerzte,
  getZahnarztById
};
