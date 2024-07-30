export default interface IUser {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	job_title: string;
	bio: string;
	avatar: string | null;
}
