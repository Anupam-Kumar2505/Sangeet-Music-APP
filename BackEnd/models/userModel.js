import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    genre: {
      type: [String],
      default: [],
    },
    stats: {
      type: {
        numberOfSongsPlayed: { type: Number, default: 0 },
        durationOfSongsPlayed: { type: Number, default: 0 },
        mostPlayedSong: { type: mongoose.Schema.Types.ObjectId, ref: "Song" },
        mostListenedGenre: { type: String, default: "" },
        favouriteArtist: { type: String, default: "" },
        // otherPopularGenres:,
      },
    },
    //role ok
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
