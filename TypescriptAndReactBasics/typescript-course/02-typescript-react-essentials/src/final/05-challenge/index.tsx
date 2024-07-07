// the solution is giving me a feel of enum 
type BasicProfileCardProps = {
  type: 'basic';
  name: string;
};
// WE CAN EVEN HAVE A CONSTANT IN THE NAME OF TYPE, kya mazak h .............. 

type AdvancedProfileCardProps = {
  type: 'advanced';
  name: string;
  email: string;
};

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;

function Component(props: ProfileCardProps) {
  // as the mail may mot present in the case of AdvancedProfileCardProps 
  const { type, name } = props;

  if (type === 'basic') {
    return (
      <article className='alert alert-success'>
        <h2>user : {name}</h2>
      </article>
    );
  }

  // we can destrucutre the email here, typescript is do smart 
  
  return (
    <article className='alert alert-danger'>
      <h2>user : {name}</h2>
      <h2> email : {props.email}</h2>
    </article>
  );
}
export default Component;
