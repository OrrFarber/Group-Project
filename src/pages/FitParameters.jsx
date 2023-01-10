export default function FitParameters() {
  return (
    <div className="fit-params">
      <label name="difficulty" className="difficulty">
        Chose the difficulty level of the exercise:{" "}
      </label>
      <select name="difficulty">
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="expert">expert</option>
      </select>

      <label name="exercise-type" className="exercise type">
        Chose the exercise type:
      </label>
      <select name="exercise-type">
        <option value="cardio">cardio</option>
        <option value="olympic_weightlifting">olympic_weightlifting</option>
        <option value="plyometrics">plyometrics</option>
        <option value="powerlifting">powerlifting</option>
        <option value="strength">strength</option>
        <option value="stretching">stretching</option>
        <option value="strongman">strongman</option>
      </select>

      <label name="muscle-group" className="exercise type">
        Chose muscle group targeted by the exercise:
      </label>
      <select name="muscle-group">
        <option value="abdominals">abdominals</option>
        <option value="abductors">abductors</option>
        <option value="adductors">adductors</option>
        <option value="biceps">biceps</option>
        <option value="calves">calves</option>
        <option value="chest">chest</option>
        <option value="forearms">forearms</option>
        <option value="glutes">glutes</option>
        <option value="hamstrings">hamstrings</option>
        <option value="lats">lats</option>
        <option value="lowerback ">lowerback </option>
        <option value="middleback ">middleback </option>
        <option value="neck ">neck </option>
        <option value="quadriceps ">quadriceps </option>
        <option value="traps ">traps </option>
        <option value="triceps ">triceps </option>
      </select>
    </div>
  );
}
