#include <iostream>
#include <sstream>
#include <string>
using namespace std;

int main()
{
	setlocale(LC_ALL, "swedish");

	cout << "Uppgift 1 \n";
	string text;
	cout << "skriva text: \n";
	getline(cin, text);

	if (text == "Stefan") {
		cout << "Hej Stefan\n";
	}
	else
	{
		cout << "Jaha du är inte Stefan\n";
	}

	cout << "Uppgift 2 \n";
	float total = 0;
	string input;
	float num = 0;
	int index = 1;
	while (true) {
		cout << "Nr: " << index << " -> skriva ett tal: " << endl;
		cin >> input;
		stringstream s(input);
		if (!(s >> num) || !s.eof()) {
			cout << "fel num " << input << " !" << endl;
		}
		else {
			s >> num;
			index = index + 1;
			total = total + num;
		}
		if (index == 11) {
			break;
		}
	}
	cout << "summan: " << total << endl;

	return 0;
}