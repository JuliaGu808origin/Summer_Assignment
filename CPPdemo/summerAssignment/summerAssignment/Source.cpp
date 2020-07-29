#include <iostream>
#include <sstream>
#include <string>
using namespace std;

int main()
{
	setlocale(LC_ALL, "swedish");
	string text;
	cout << "skriva text: \n";
	cin >> text;

	if (text == "Stefan") {
		cout << "Hej Stefan";
	}
	else
	{
		cout << "Jaha du är inte Stefan";
	}


	return 0;
}